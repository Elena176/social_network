import React from 'react';
import {StoreType} from '../../../redux/store';
import Dialogs from '../Dialogs';
import {sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogs-reducer';


type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return <Dialogs
            dialogsPage={state}
            onSendMessageClick={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
        />
}

export default DialogsContainer;