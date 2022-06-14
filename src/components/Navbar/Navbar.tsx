import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import {PATH} from '../../enum/routes/routes';

function Navbar () {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={PATH.PROFILE} activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={PATH.DIALOGS} activeClassName={s.activeLink}>Messages</NavLink>
        </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={PATH.USERS} activeClassName={s.activeLink}>Users</NavLink>
            </div>
        <div className={s.item}>
            <NavLink to={PATH.NEWS} activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={PATH.MUSIC} activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={PATH.SETTINGS} activeClassName={s.activeLink}>Settings</NavLink>
        </div>
    </nav>
    )
}
export default Navbar;