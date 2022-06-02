import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';
import {ProfileUserType} from '../../redux/Types';

type ProfilePropsType = {
  profile: ProfileUserType
  status: string
  updateUserStatus: (status: string) => void
}
const Profile = ({profile, updateUserStatus, status}: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={profile}
                   status={status} updateUserStatus={updateUserStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;