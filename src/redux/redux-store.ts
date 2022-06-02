import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
} from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import appReducer from './app-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export const  store = createStore(rootReducer, applyMiddleware(thunk));

