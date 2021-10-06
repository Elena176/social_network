import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profile-reducer';
import {ProfileUserType} from '../../redux/store';
import {RouteComponentProps, withRouter } from 'react-router';
import {compose} from 'redux';

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
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(19383);
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            /*раскукоживаем пропсы для Profile*/
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfile, getUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);
