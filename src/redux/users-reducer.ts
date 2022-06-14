import {usersAPI} from '../api/api';
import {ActionTypes, UserType} from './Types';
import {Dispatch} from 'redux';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS';

export type InitialStateUsersType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

let initialState: InitialStateUsersType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1000,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionTypes): InitialStateUsersType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)

      }
    default:
      return state;

  }
}


export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const

export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId}) as const

export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users}) as const    //добавление user

export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}) as const

export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
}) as const

export const getUsersThunkCreator = (page: number, pageSize: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.requestUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    //dispatch(setTotalUsersCount(response.data.totalCount)) //обновляем количество totalUsers
  }
}

export const onPageChanged = (pageNumber: number, pageSize: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.requestUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
  }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleIsFollowingProgress(true, userId))
  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}
export const follow = (userId: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
  }
}

export const unFollow = (userId: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess)
  }
}

export default usersReducer;