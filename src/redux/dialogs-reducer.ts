import {ActionsTypes} from './store';

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}
export type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

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


const dialogsReducer = (state:InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state,
    //messages: [...state.messages];
    };
    switch (action.type) {
        case 'SEND-MESSAGE':
            const body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 8, message: body});
            return stateCopy;
        case 'UPDATE-NEW-MESSAGE-BODY': {
let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const

export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body}) as const

export default dialogsReducer;