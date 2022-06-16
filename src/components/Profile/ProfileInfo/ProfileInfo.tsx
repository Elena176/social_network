import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileUserType} from '../../../redux/Types';
import ProfileStatusWithHooks from './ProfileStatusWithHook';
import userPhoto from '../../../assets/images/user.png';

type ProfileInfoPropsType = {
  profile: ProfileUserType
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0]
      savePhoto(file)
    }
  }
  return (
    <div>
      {/*<div className={s.img}>
        <img
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8ye7sE-0tcxVySt41XzQewEJsrDUg7YdNw&usqp=CAU'}
          alt={''}/>
      </div>*/}
      <div className={s.descriptionBlock}>
        <div>
          <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt={''}
               onDoubleClick={() => setEditMode(true)}
          />
          {editMode &&
            isOwner &&
              <span>
              <input type={'file'} name={'file'} onChange={onMainPhotoSelected}/>
                  </span>
          }

        </div>
        {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}
        {profile.fullName}
        {/* <ProfileStatus  status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;