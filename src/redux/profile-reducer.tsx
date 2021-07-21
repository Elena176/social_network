import {ActionsTypes} from './store';

export type PostType = {
    id: number
    message: string
    likeValue: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeValue: 15},
        {id: 2, message: 'It\'s my first post.', likeValue: 10},
        {id: 3, message: 'Where are you?', likeValue: 10},
        {id: 4, message: 'Hi!', likeValue: 50}
    ],
    newPostText: 'Hello!'
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {

        case 'ADD-POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likeValue: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';                      //обнуление строки
            return stateCopy;
        }
        case 'NEW-POST-UPDATE': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
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