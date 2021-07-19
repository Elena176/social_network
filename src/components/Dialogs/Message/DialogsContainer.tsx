import React from 'react';
import Dialogs from '../Dialogs';
import {sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogs-reducer';
import StoreContext from '../../../StoreContext';


const DialogsContainer = () => {

    return  <StoreContext.Consumer>
        { store => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC());
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body));
                }
                return <Dialogs
                    dialogsPage={state}
                    onSendMessageClick={onSendMessageClick}
                    updateNewMessageBody={onNewMessageChange}
                />

            }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;