import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';
import {ActionTypes, ProfileUserType} from './Types';

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
export type PostType = {
  id: number
  message: string
  likeValue: number
}

export type InitialProfileStateType = {
  posts: Array<PostType>
  profile: ProfileUserType
  status: string
}


let initialState: InitialProfileStateType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likeValue: 15},
    {id: 2, message: 'It\'s my first post.', likeValue: 10},
    {id: 3, message: 'Where are you?', likeValue: 10},
    {id: 4, message: 'Hi!', likeValue: 50}
  ],
  profile: null,
  status: '',
}

const profileReducer = (state: InitialProfileStateType = initialState, action: ActionTypes): InitialProfileStateType => {

  switch (action.type) {
    case ADD_POST: {
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile:{
          ...state.profile,
          photos: action.photos} as ProfileUserType
      }
    }
    default:
      return state;

  }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const);
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

//запрос на получение профайла user
export const getProfile = (userId: string) => async (dispatch: Dispatch<ActionTypes>) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
//запрос на получение статуса user
export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
};
//запрос на получение статуса user
export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
};
export const savePhoto = (file: any) => async (dispatch: Dispatch<ActionTypes>) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
};
export default profileReducer;