import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type DialogItemType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;