import React from 'react';
import s from './Header.module.css';
type HeaderTypeProps = {

}
function Header (props: HeaderTypeProps) {
    return (
        <header className={s.header}>
        <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigioKILIrp60PRrJEHf8AjRJg5w3EQZ1z2Q&usqp=CAU'} />
             {/*src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQIZTse4n_WasuG6wOjQLK5z3w2aFqDqDfQ&usqp=CAU'}/>*/}
    </header>
    )
}
export default Header;