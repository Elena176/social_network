import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profile-reducer';
import {ProfileUserType} from '../../redux/store';
import {RouteComponentProps, withRouter } from 'react-router';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
}

type MapDispatchToPropsType = {
    getProfile: (userId: string) => void

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
});

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfile}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);
