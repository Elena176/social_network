import {ActionsTypes, UserType} from './store';

export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateUsersType = {
    users: [ ],
    pageSize:  5,
    totalUsersCount: 150,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state;

    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const

export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const

export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const    //добавление user

export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const

export const setTotalUsersCount = (totalUsersCount: number) =>( {type: 'SET-TOTAL-USERS-COUNT', totalUsersCount}) as const

export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const

export default usersReducer;