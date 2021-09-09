import profileReducer, {
    addPostActionCreator,
    newPostUpdateActionCreator,
    setUserProfile
} from './profile-reducer';
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
} from './users-reducer';
import {setAuthUserData} from './auth-reducer';

type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

type PostsType = {
    id: number,
    message: string,
    likeValue: number
}

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

export type DataPropsType = null | {
    id: number
    email: string
    login: string
}

export type DataLoginPropsType = {
    data: null | DataPropsType
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

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileUserType
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}


export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newPostUpdateActionCreator>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>


type StoreType = {
    _state: StateType
    _renderTree: (state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeValue: 15},
                {id: 2, message: 'It\'s my first post.', likeValue: 10},
                {id: 3, message: 'Where are you?', likeValue: 10},
                {id: 4, message: 'Hi!', likeValue: 50}
            ],
            newPostText: 'Hello!',
            profile: null,
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Elena'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Anastasia'},
                {id: 4, name: 'Danya'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Nikolay'},
                {id: 7, name: 'Natalia'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hi!'},
                {id: 4, message: 'Hi!'},
                {id: 5, message: 'Hi!'},
                {id: 6, message: 'Hi!'},
                {id: 7, message: 'Hi!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('State changed');
    },
    subscribe(observer) { //паттерны ?????
        this._renderTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._renderTree(this._state);
    }
}












