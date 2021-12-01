import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, Form, Formik} from 'formik';
import {validateItem} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

const validateAddPostMessageForm = validateItem(50) ;

class MyPosts extends React.Component<MyPostsPropsType> {
    render() {
        console.log('render')
        const postsElement = this.props.posts.map(p => <Post message={p.message}
                                                             likeValue={p.likeValue}/>);

        const addNewPost = (value: FormNewPostType) => {
            this.props.addPost(value.newPostText)
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
            {() => (
                <Form>
                    <div>
                        <Field
                            component={Textarea}
                               validate={validateAddPostMessageForm}
                               name={'newPostText'}
                               placeholder={'Enter your text'}
                        />
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

//types;
export type FormNewPostType = {
    newPostText: string
}