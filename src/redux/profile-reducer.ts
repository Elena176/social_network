import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';
import {ActionTypes, ProfileUserType} from './Types';

export type PostType = {
    id: number
    message: string
    likeValue: number
}

export type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileUserType
    status: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeValue: 15},
        {id: 2, message: 'It\'s my first post.', likeValue: 10},
        {id: 3, message: 'Where are you?', likeValue: 10},
        {id: 4, message: 'Hi!', likeValue: 50}
    ],
    profile: null,
    status: '',
}

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likeValue: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE-POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileUserType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}
export const deletePostAC = (postId: number) => ({type: 'DELETE-POST', postId} as const);

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        //запрос на получение профайла user
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch<ActionTypes>) => {
    //запрос на получение статуса user
    profileAPI.getStatus(userId)
        .then(response => {
                dispatch(setStatus(response.data))
            }
        )
};

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ActionTypes>) => {
    //запрос на получение статуса user
    profileAPI.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }
        )
};

export default profileReducer;