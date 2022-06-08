import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import {connect, Provider} from 'react-redux';
import {AppStateType, store} from './redux/redux-store';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
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

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  }
}

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp}))(App);

// @ts-ignore
const MainApp = () => {
  return (
    <>
      {// @ts-ignore
      <BrowserRouter>
        {// @ts-ignore
        <Provider store={store}>
         <AppContainer />
        </Provider>}
      </BrowserRouter>}
    </>
  )
}


export default MainApp;

//types
type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchToPropsType = {
  initializeApp: () => void
}
type AppPropsType = MapStatePropsType & MapDispatchToPropsType;