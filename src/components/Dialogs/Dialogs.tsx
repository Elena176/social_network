import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsType, MessagesPropsType} from '../../index';

type ItemPropsType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesPropsType>
}

const Dialogs: React.FC<ItemPropsType> = (props) => {

    // eslint-disable-next-line react/jsx-no-undef
    let dialogsElements = props.appState.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map( m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;