import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
// import s from './components/Dialogs/Dialogs.module.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import {StateType} from './redux/state';


type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>

                </div>
            </div>
    );
}

export default App;
