import {authAPI} from '../api/api';
import {ActionTypes, DataPropsType} from './Types';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

export type InitialStateDataType = {
    data: DataPropsType
    isAuth: boolean
}

let initialState: InitialStateDataType = {
    data: null,
    isAuth: false,
}
//{login, email, id}

const authReducer = (state: InitialStateDataType = initialState, action: ActionTypes): InitialStateDataType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                data: action.data,
              //  isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (data: DataPropsType, isAuth: boolean) => ({type: 'SET-USER-DATA', data, isAuth}) as const

export const getAuthUserData = () => (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
                dispatch(setAuthUserData(response.data.data, true));
            }
        });
}

export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {                     dispatch(getAuthUserData())
            }
        });
}

export const logOut = () => (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {                     dispatch(setAuthUserData(null, false))
            }
        });
}

export default authReducer;