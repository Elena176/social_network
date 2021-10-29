import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {required} from '../../../utils/validators/validators';
import {Field, Form, Formik } from 'formik';

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
                <AddPostFormFormik addNewPost={addNewPost}/>
               {/* <AddPostForm onSubmit={addNewPost}/>*/}
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

type AddPostPropsType = {
    addNewPost: (value: FormNewPostType) => void
}

const validateForm = (values: any) => {
    const errors = {};
    /*  if (!values.email) {
          errors.email = 'Required';
      } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
          errors.email = 'Invalid email address';
      }*/
    return errors;
}



export const AddPostFormFormik = (props: AddPostPropsType) => {
    const submit = (values: FormNewPostType, { setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        props.addNewPost(values)
    }
    return <div>
        <Formik
            initialValues={{ newPostText: ''}}
            validate={validateForm}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div>
                        <Field  component={'textarea'} name={'newPostText'} placeholder={'Enter your text'} validate={required}/>
                    </div>
                    <div>
                        <button type={'button'}>Add post</button>
                        <button type={'button'}>Remove</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}


/*

export const AddPostForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field<string>  component={'textarea'} name={'newPostText'} placeholder={'Enter your text'} validate={required}/>
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
*/

export default MyPosts;