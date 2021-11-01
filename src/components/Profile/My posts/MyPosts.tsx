import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, Form, Formik} from 'formik';
import {validateAddPostForm} from '../../../utils/validators/validators';

export type FormNewPostType = {
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
                    <div >
                        <Field
                            component={'textarea'}
                               validate={validateAddPostForm}
                               name={'newPostText'}
                               placeholder={'Enter your text'}
                        />
                        {errors && touched && <div className={s.errorMessage}>{errors.newPostText}</div>}
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

export default MyPosts;