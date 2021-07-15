import {ActionsTypes, DialogsPageType} from './store';

let initialState = {
    dialogs: [
        {id: 1, name: 'Elena'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Anastasia'},
        {id: 4, name: 'Danya'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Nikolay'},
        {id: 7, name: 'Natalia'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi!'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Hi!'},
        {id: 6, message: 'Hi!'},
        {id: 7, message: 'Hi!'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state:DialogsPageType = initialState, action: ActionsTypes) => {
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