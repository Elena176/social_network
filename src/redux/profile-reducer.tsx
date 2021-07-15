import {ActionsTypes, PostsType, ProfilePageType} from './store';

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeValue: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';                      //обнуление строки
            return state;
        case 'NEW-POST-UPDATE':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const newPostUpdateActionCreator = (text: string) => {
    return  {type: 'NEW-POST-UPDATE', newText: text} as const
}
export default profileReducer;