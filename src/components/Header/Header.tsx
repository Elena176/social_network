import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderTypeProps = {
    isAuth: boolean
    login: string | null
    logOut: () => void
}

function Header (props: HeaderTypeProps) {

    return (
        <header className={s.header}>
        <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigioKILIrp60PRrJEHf8AjRJg5w3EQZ1z2Q&usqp=CAU'} alt={''}/>
             {/*src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQIZTse4n_WasuG6wOjQLK5z3w2aFqDqDfQ&usqp=CAU'}/>*/}
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOut}>LOG OUT</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>
    )
}
export default Header;