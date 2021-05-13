import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    text: string
}
const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagePropsType) => {
    return  <div className={s.message}>{props.text}</div>
}
//test commit
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Elena' id='1' />
                <DialogItem name='Denis' id='2' />
                <DialogItem name='Anastasia' id='3' />
                <DialogItem name='Danya' id='4' />
                <DialogItem name='Sveta' id='5' />
                <DialogItem name='Nikolay' id='6' />
                <DialogItem name='Natalia' id='7' />
            </div>
            <div className={s.messages}>
               < Message text='Hi!'/>
               < Message text='How are you?'/>
               < Message text='Hi!'/>
               < Message text='Hi!'/>
               < Message text='Hi!'/>
               < Message text='Hi!'/>
            </div>
        </div>
    )
}

export default Dialogs;