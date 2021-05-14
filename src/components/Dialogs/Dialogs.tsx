import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number

}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagePropsType) => {
    return  <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    let dialogsData = [
        {id:1, name:'Elena'},
        {id:2, name:'Denis'},
        {id:3, name:'Anastasia'},
        {id:4, name:'Danya'},
        {id:5, name: 'Sveta'},
        {id:6, name: 'Nikolay'},
        {id:7, name: 'Natalia'}
    ]

    let messages = [
        {id:1, message: 'Hi!'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Hi!'},
        {id:4, message: 'Hi!'},
        {id:5, message: 'Hi!'},
        {id:6, message: 'Hi!'},
        {id:7, message: 'Hi!'}
    ]

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map( m => <Message message={m.message} />)

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