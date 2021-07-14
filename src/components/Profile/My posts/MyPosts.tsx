import React, {ChangeEvent} from 'react';
import {PostsType} from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    newPostUpdate: (newText: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    const postsElement = props.posts.map(p => <Post message={p.message} likeValue={p.likeValue}/>);

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.newPostUpdate(e.currentTarget.value);
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