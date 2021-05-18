import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsPropsType} from '../../index';

type ProfilePropsType ={
    posts: Array<PostsPropsType>
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;