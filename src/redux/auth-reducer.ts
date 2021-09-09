import {ActionsTypes, DataPropsType} from './store';

export type InitialStateDataType = {
    data: DataPropsType
    isAuth: boolean
}

let initialState: InitialStateDataType = {
    data: null,
    isAuth: false,
}
//{login, email, id}

const authReducer = (state: InitialStateDataType = initialState, action: ActionsTypes): InitialStateDataType => {

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

export default authReducer;