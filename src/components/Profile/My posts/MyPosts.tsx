import React from 'react';
import {PostsType} from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


type MyPostsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeValue={p.likeValue}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current)
        props.addPost(newPostElement.current.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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