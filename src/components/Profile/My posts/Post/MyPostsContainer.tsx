import React from 'react';
import MyPosts from '../MyPosts';
import {StoreType} from '../../../../redux/store';
import {addPostActionCreator, newPostUpdateActionCreator} from '../../../../redux/profile-reducer';

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(newPostUpdateActionCreator(text));
    }

    return <MyPosts addPost={addPost}
                     newPostUpdate={onPostChange}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
        />

}
export default MyPostsContainer;