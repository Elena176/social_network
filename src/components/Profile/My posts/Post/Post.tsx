import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likeValue: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVAXcV-lIw7ddkFgavYPbJdTg5-WiJzQjow&usqp=CAU'} alt={''}/>
            {props.message}
            <div>
                <span>like: {props.likeValue}</span>
            </div>
        </div>
    )
}

export default Post;