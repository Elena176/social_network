import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, Form, Formik} from 'formik';

type FormMessageDataType = {
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
                    {/* <AddMessageForm onSubmit={addNewMessage}/>*/}
                </div>
            </div>
        </div>
    )
}

/*export const AddMessageForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
        <div>
                 <Field component={'textarea'} name={'newMessageBody'}  placeholder={'Enter your message'}/>
        </div>
                    <div>
                        <button>SEND</button>
                    </div>
        </form>
            )}
        </Form>
    )
}*/

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

type AddMessagePropsType = {
    addNewMessage: (formData: FormMessageDataType) => void
}

export const AddMessageFormFormik = (props: AddMessagePropsType) => {

    const submit = (values: FormMessageDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(values, 'VAlues')
        props.addNewMessage(values)
    }
    return <div>
        <Formik
            initialValues={{newMessageBody: ''}}
            validate={validateForm}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                    <div>
                        <button type={'submit'}>SEND</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}


export default Dialogs;