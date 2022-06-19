import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus, Values} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter } from 'react-router';
import {compose} from 'redux';
import {ProfileUserType} from '../../redux/Types';
import {PATH} from '../../enum/routes/routes';

//import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.authorizedUserId);
            if (!userId) {
                this.props.history.push(PATH.LOGIN)
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            /*раскукоживаем пропсы для Profile*/
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);

//types
type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: Values) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType;