import React from 'react';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType ={
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
            addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;