import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Form, Field} from 'react-final-form';


/*type DialogsPropsType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: () => void
    updateNewMessageBody: (body: string) => void
}*/

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                         key={d.id}
                                                                         id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = props.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    let updateNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm newMessageBody={newMessageBody}
                                    updateNewMessageBody={updateNewMessageBody}/>

                </div>
            </div>
        </div>
    )
}

export const AddMessageForm = (props: any) => {
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
}


export default Dialogs;