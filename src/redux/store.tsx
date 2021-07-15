import profileReducer, {addPostActionCreator, newPostUpdateActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}


export type ActionsTypes = ReturnType<typeof  addPostActionCreator>
    | ReturnType<typeof newPostUpdateActionCreator>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>


export type StoreType = {
    _state: StateType
    _renderTree: (state:StateType) => void
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


export default store;









