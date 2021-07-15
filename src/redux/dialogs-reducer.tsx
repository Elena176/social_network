import {ActionsTypes, DialogsPageType} from './store';

const dialogsReducer = (state:DialogsPageType, action: ActionsTypes) => {
    debugger;
    switch (action.type) {
        case 'SEND-MESSAGE':
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 8, message: body});
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body}) as const

export default dialogsReducer;