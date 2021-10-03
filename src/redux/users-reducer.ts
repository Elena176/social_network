import {ActionsTypes, UserType} from './store';
import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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
    pageSize:  5,
    totalUsersCount: 150,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
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

export const setTotalUsersCount = (totalUsersCount: number) =>( {type: SET_TOTAL_USERS_COUNT, totalUsersCount}) as const

export const toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const

export const toggleIsFollowingProgress = (isFetching:boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}) as const

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))                  // после ответа убираем preloader
            dispatch(setUsers(data.items))
            //dispatch(setTotalUsersCount(response.data.totalCount)) //обновляем количество totalUsers
        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });

    }
    }

export default usersReducer;