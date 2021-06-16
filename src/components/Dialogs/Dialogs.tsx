import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type PropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />)
 let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        if (newMessageElement.current)
            alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref ={newMessageElement}> </textarea>
                   <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;