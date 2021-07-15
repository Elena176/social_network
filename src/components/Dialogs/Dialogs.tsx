import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/state';

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />)

    let newMessageBody = props.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                <div>
                    <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder={'Enter your message'}

                >
                    </textarea>
                </div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
                </div>
        </div>
    )
}

export default Dialogs;