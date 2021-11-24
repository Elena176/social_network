import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileUserType} from '../../../redux/Types';
import ProfileStatusWithHooks from './ProfileStatusWithHook';

type ProfileInfoPropsType = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8ye7sE-0tcxVySt41XzQewEJsrDUg7YdNw&usqp=CAU'} alt={''}/>
                {/*src={'https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg'}/>*/}
            </div>
            <div className={s.descriptionBlock}>
               {/* <ProfileStatus  status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                <img src={props.profile.photos.large} alt={''}/>
                {props.profile.fullName}

            </div>
        </div>
    )
}

export default ProfileInfo;