import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Form, Field} from 'react-final-form';
import {requiredField} from '../../../utils/validators/validators';

type FormNewPostType = {
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    const postsElement = props.posts.map(p => <Post message={p.message}
                                                    likeValue={p.likeValue}/>);

    const addNewPost = (value: FormNewPostType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export const AddPostForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field<string>  component={'textarea'} name={'newPostText'} placeholder={'Enter your text'} validate={requiredField}/>
                    </div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </form>
            )
            }
        </Form>
    )
}

export default MyPosts;