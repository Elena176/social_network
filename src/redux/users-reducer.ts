import {ActionsTypes} from './store';

type locationPropsType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationPropsType
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

let initialState: InitialStateUsersType = {
    users: [
       {id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
       followed: true, fullName: 'Elena', status: 'I am so pretty', location: {city: 'Odessa', country: 'Ukraine'}},
        {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg',
            followed: true, fullName: 'Denis', status: 'I am a boss', location: {city: 'Odessa', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
            followed: false, fullName: 'Natasha', status: 'I am a grandma', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
            followed: true, fullName: 'Nastya', status: 'I am so pretty too', location: {city: 'Vienna', country: 'Austria'}},
    ]

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