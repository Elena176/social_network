import React from 'react';
import Dialogs from './Dialogs';
import {InitialStateType, sendMessageAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    onSendMessageClick:(newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    }
}

export default compose<React.ComponentType>(
        connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
        withAuthRedirect,
    )(Dialogs);

