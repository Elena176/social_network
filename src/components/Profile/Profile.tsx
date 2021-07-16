import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import MyPostsContainer from './My posts/Post/MyPostsContainer';

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}

export default Profile;