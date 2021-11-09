import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import {connect} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import {getAuthUserData} from './redux/auth-reducer';
import {withRouter} from 'react-router';
import {compose} from 'redux';

type AppPropsType = MapDispatchToPropsType
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}


export default compose(
    withRouter,
    connect<{}, MapDispatchToPropsType, {}, AppStateType>(null, {getAuthUserData}))(App);
