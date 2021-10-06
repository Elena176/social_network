import {authAPI} from '../api/api';
import {Dispatch} from 'redux';
import {ActionTypes, DataPropsType} from './Types';

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
                isAuth: true,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (data: DataPropsType) => ({type: 'SET-USER-DATA', data}) as const

export const getAuthUserData = () => (dispatch: Dispatch<ActionTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
                dispatch(setAuthUserData(response.data.data));
            }
        });
}

export default authReducer;