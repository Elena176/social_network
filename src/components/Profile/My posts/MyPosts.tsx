import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, Form, Formik} from 'formik';

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

const validateTextArea = (values: string) => {
    const maxLength = 20;
    let errors;
    if (!values) {
        errors = 'Field is required';
    } else if (values.length > maxLength) {
        errors = `Max length is ${maxLength} symbols`;
    }
    return errors;
}


export const AddPostFormFormik = (props: AddPostPropsType) => {

    const submit = (values: FormNewPostType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addNewPost(values)
    }
    return <div>
        <Formik
            initialValues={{newPostText: ''}}
            onSubmit={submit}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your text'}
                               validate={validateTextArea}
                        />
                        {errors.newPostText && touched.newPostText && <div>{errors.newPostText}</div>}
                    </div>
                    <div>
                        <button type={'submit'}>Add post</button>
                        <button type={'submit'}>Remove</button>
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