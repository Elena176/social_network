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
import {StoreType} from './redux/state';


type AppPropsType = {
    store: StoreType
    addPost: () => void
    newPostUpdate: (newText: string) => void
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
                               addPost={props.store.addPost.bind(props.store)}
                               newPostUpdate={props.store.newPostUpdate.bind(props.store)}
                           />}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={state.dialogsPage} />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>

                </div>
            </div>
    );
}

export default App;
