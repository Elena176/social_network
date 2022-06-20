import {authAPI, securityAPI} from '../api/api';
import {ActionTypes} from './Types';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'
export type InitialStateDataType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
  error: null | string
  captchaUrl: null | string
}

let initialState: InitialStateDataType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: null,
  captchaUrl: null
}
//{login, email, id}

const authReducer = (state: InitialStateDataType = initialState, action: ActionTypes): InitialStateDataType => {

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
} as const)

export const getAuthUserData = () => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
    let {id, login, email} = response.data.data
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: null | string) => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
   return  dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
     return dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
    dispatch(setErrorMessage(message));
  }
}

export const getCaptchaUrl = () => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  const response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logOut = () => async (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer;