import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, Form, Formik} from 'formik';
import {validateItem} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl/FormsControl';

const validateFormMessage = validateItem(100);

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d: any) => <DialogItem name={d.name}
                                                                         key={d.id}
                                                                         id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m: any) => <Message message={m.message} key={m.id}/>)


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

export const AddMessageFormFormik = (props: AddMessagePropsType) => {
    const submit = (values: FormMessageDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addNewMessage(values)
    }
    return <div>
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div>
                        <Field component={Textarea}
                               validate={validateFormMessage}
                               name={'newMessageBody'}
                               placeholder={'Enter your message'}/>
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

//types;
export type FormMessageDataType = {
    newMessageBody: string
}

type AddMessagePropsType = {
    addNewMessage: (formData: FormMessageDataType) => void
}