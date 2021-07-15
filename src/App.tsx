import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import {ActionsTypes, StoreType} from './redux/store';


type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={state.profilePage}
                               dispatch = {props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={state.dialogsPage}
                           dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>

                </div>
            </div>
    );
}

export default App;
