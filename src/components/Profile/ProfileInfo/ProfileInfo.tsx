import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileContactsType, ProfileUserType} from '../../../redux/Types';
import ProfileStatusWithHooks from './ProfileStatusWithHook';
import userPhoto from '../../../assets/images/user.png';
import {ProfileDataForm} from './ProfileDataForm';
import {Values} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = {
  profile: ProfileUserType
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (formData: Values) => void
}

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editForm, setEditForm] = useState<boolean>(false)
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
  const goToEditMode = () => {
    setEditForm(true)
  }
  const onSubmit = (formData: Values) => {
    saveProfile(formData)
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
        {editForm ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}

        {/* <ProfileStatus  status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}
type ProfileDataPropsType = {
  profile: ProfileUserType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {
      profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ProfileContactsType]}/>
    })}
    </div>
  </div>
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;