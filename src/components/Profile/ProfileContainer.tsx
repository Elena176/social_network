import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile} from '../../redux/profile-reducer';
import {ProfileUserType} from '../../redux/store';
import {RouteComponentProps, withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to='/login'/>            //проверка на авторизацию
        return (
            <Profile {...this.props} profile={this.props.profile}/>       /*раскукоживаем пропсы для Profile*/
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);