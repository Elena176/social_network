import {authAPI} from '../api/api';
import {ActionTypes} from './Types';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE'
export type InitialStateDataType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
  error: null | string
}

let initialState: InitialStateDataType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: null
}
//{login, email, id}

const authReducer = (state: InitialStateDataType = initialState, action: ActionTypes): InitialStateDataType => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        //isAuth: true
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  payload: {id, login, email, isAuth}
} as const)

export const setErrorMessage = (error: string | null) => ({type: SET_ERROR_MESSAGE, error} as const)

export const getAuthUserData = () => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
    let {id, login, email} = response.data.data
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
    dispatch(setErrorMessage(message));
  }
}

export const logOut = () => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer;