import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';
import {ProfileUserType} from '../../redux/store';
import {RouteComponentProps, withRouter } from 'react-router';
import {profileAPI} from '../../api/api';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(19383);
        }
        profileAPI.getProfile(userId)                          //запрос на получение профайла user
        .then(data => {
            this.props.setUserProfile(data)
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>       /*раскукоживаем пропсы для Profile*/
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);