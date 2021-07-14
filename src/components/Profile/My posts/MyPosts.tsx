import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType} from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    const postsElement = props.posts.map(p => <Post message={p.message} likeValue={p.likeValue}/>);

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
            props.dispatch({type: 'NEW-POST-UPDATE', newText: text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;