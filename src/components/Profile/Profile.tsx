import React from 'react';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;