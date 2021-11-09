import {ActionTypes} from './Types';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {getAuthUserData} from './auth-reducer';

export type InitialStateDataType = {
    initialized: boolean
}

let initialState: InitialStateDataType = {
   initialized: false
}

const appReducer = (state: InitialStateDataType = initialState, action: ActionTypes): InitialStateDataType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'} as const)

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, undefined, ActionTypes>) => {
    let promise = dispatch(getAuthUserData());
Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess())
    })
;
}



export default appReducer;