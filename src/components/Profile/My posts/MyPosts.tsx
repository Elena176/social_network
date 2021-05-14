import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message: 'Hi, how are you?', likeValue: 15},
        {id:2, message: 'It\'s my first post.', likeValue: 10}
    ]
    let postsElement = posts.map( p => <Post message={p.message} likeValue={p.likeValue} />
    )


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