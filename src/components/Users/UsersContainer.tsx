import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    followSuccess, getUsersThunkCreator, onPageChanged,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress, unFollow,
    unfollowSuccess,
} from '../../redux/users-reducer';
import {UsersFunctionComponent} from './UsersFunctionComponent';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {UserType} from '../../redux/Types';

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchPropsType = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChanged: (pageNumber: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component <UsersPropsType> {
    componentDidMount() {
this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunctionComponent users={this.props.users}
                                    totalUsersCount={this.props.totalUsersCount}
                                    pageSize={this.props.pageSize}
                                    currentPage={this.props.currentPage}
                                    onPageChanged={this.onPageChanged}
                                    follow={this.props.follow}
                                    unFollow={this.props.unFollow}
                                    followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }

}*/
export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsersThunkCreator,
        follow,
        unFollow,
        onPageChanged,
    }),
)(UsersContainer);
