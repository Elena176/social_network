import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';
import {ActionTypes, ProfileUserType} from './Types';

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
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
    default:
      return state;

  }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const);

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
export default profileReducer;