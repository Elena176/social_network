
export type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

export type PostsType = {
    id: number,
    message: string,
    likeValue: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type ActionsTypes = ReturnType<typeof  addPostActionCreator> | ReturnType<typeof newPostUpdateActionCreator>


export type StoreType = {
    _state: StateType
    _renderTree: (state:StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const newPostUpdateActionCreator = (text: string) => {
    return  {type: 'NEW-POST-UPDATE', newText: text} as const
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
            newPostText: 'Hello!'
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
            ]
        }
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
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeValue: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';                      //обнуление строки
            this._renderTree(this._state);
        }
        else if (action.type === 'NEW-POST-UPDATE') {
            this._state.profilePage.newPostText = action.newText;
            this._renderTree(this._state);
        }
    }
}

export default store;









