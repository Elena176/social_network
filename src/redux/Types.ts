import {addPostActionCreator, setStatus, setUserProfile} from './profile-reducer';
import {sendMessageAC} from './dialogs-reducer';
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollowSuccess
} from './users-reducer';
import {setAuthUserData, setErrorMessage} from './auth-reducer';
import {initializedSuccess} from './app-reducer';

type locationPropsType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    location: locationPropsType
    photos: {
        small: string,
        large: string
    }
}

export type ProfileUserType = null | {
    id: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

/*export type DataPropsType = {
    payload: {
        id: number
        email: string
        login: string
    }
}*/
export type DataLoginPropsType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

export type DataUsersPropsType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export type FollowUserPropsType = {
    resultCode: number
    messages: string[]
    data: {}
}

export type StatusPropsType = {
    resultCode: number
    messages: string[]
    data: {}
}


export type ActionTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setErrorMessage>
    | ReturnType<typeof initializedSuccess>