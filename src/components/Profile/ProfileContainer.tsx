import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter } from 'react-router';
import {compose} from 'redux';
import {ProfileUserType} from '../../redux/Types';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
}

type MapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(19383);
        }

        this.props.getUserStatus(userId);
        this.props.getProfile(userId)
    }

    render() {
        return (
            /*раскукоживаем пропсы для Profile*/
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);
