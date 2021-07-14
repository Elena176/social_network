import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8ye7sE-0tcxVySt41XzQewEJsrDUg7YdNw&usqp=CAU'}/>
                {/*src={'https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg'}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;