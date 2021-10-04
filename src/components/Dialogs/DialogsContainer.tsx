import React from 'react';
import Dialogs from './Dialogs';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    onSendMessageClick:() => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<React.ComponentType>(
        connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
        withAuthRedirect,
    )(Dialogs);

