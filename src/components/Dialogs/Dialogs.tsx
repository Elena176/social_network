import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, Form, Formik} from 'formik';
import {validateAddPostForm} from '../../utils/validators/validators';

export type FormMessageDataType = {
    newMessageBody: string
}
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                         key={d.id}
                                                                         id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)


    const addNewMessage = (formData: FormMessageDataType) => {
        props.onSendMessageClick(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormFormik addNewMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type AddMessagePropsType = {
    addNewMessage: (formData: FormMessageDataType) => void
}

export const AddMessageFormFormik = (props: AddMessagePropsType) => {

    const submit = (values: FormMessageDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addNewMessage(values)
    }
    return <div>
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={submit}
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field component={'textarea'}
                               validate={validateAddPostForm}
                               name={'newMessageBody'}
                               placeholder={'Enter your message'}/>
                        {errors && touched && <div className={s.errorMessage}>{errors.newMessageBody}</div>}
                    </div>
                    <div>
                        <button type={'submit'}>SEND</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}


export default Dialogs;