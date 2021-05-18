import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from '../../../index';

type MyPostsType = {
   posts: Array<PostsType>
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeValue={p.likeValue} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea>g</textarea>
        </div>
                <div>
                <button>Add post</button>
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