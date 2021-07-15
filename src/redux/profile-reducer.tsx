import {ActionsTypes, PostsType, ProfilePageType} from './store';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeValue: 15},
        {id: 2, message: 'It\'s my first post.', likeValue: 10},
        {id: 3, message: 'Where are you?', likeValue: 10},
        {id: 4, message: 'Hi!', likeValue: 50}
    ],
    newPostText: 'Hello!'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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