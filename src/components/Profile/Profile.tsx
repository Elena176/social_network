import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';
import {ProfileUserType} from '../../redux/Types';
import {Values} from '../../redux/profile-reducer';


type ProfilePropsType = {
  profile: ProfileUserType
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (formData: Values) => void
}
const Profile = ({profile, updateUserStatus, status, isOwner, savePhoto, saveProfile}: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo isOwner={isOwner}
                   profile={profile}
                   status={status} updateUserStatus={updateUserStatus}
                   savePhoto={savePhoto}
                   saveProfile={saveProfile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;