import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';
import {ProfileUserType} from '../../redux/Types';

type ProfilePropsType = {
  profile: ProfileUserType
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}
const Profile = ({profile, updateUserStatus, status, isOwner, savePhoto}: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo  isOwner={isOwner}
        profile={profile}
                   status={status} updateUserStatus={updateUserStatus}
                    savePhoto={savePhoto}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;