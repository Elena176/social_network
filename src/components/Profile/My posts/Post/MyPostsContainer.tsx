import React from 'react';
import MyPosts from '../MyPosts';
import {addPostActionCreator, newPostUpdateActionCreator} from '../../../../redux/profile-reducer';
import StoreContext from '../../../../StoreContext';


const MyPostsContainer = () => {
    return  <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text: string) => {
                    store.dispatch(newPostUpdateActionCreator(text));
                }

                return <MyPosts addPost={addPost}
                                newPostUpdate={onPostChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
}
export default MyPostsContainer;