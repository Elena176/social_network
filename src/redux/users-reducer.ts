import {ActionsTypes} from './store';

type locationPropsType = {
    city: string
    country: string
}
export type UserType = {
    photos: {small: string}
    id: number
    followed: boolean
    name: string
    status: string
    location: locationPropsType
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

let initialState: InitialStateUsersType = {
    users: [ ]

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
                users: [...state.users, ...action.users]
            }

        default:
            return state;

    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const

export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const

export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const    //добавление user



export default usersReducer;