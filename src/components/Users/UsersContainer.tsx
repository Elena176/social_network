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
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/users-selectors';

class UsersContainer extends React.Component <UsersPropsType> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersThunkCreator(currentPage, pageSize);
  };

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props
    this.props.onPageChanged(pageNumber, pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

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

//types
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

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;


