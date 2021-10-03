import Dialogs from './Dialogs';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    onSendMessageClick:() => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;