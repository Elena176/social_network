import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {AppStateType, store} from './redux/redux-store';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./Login/Login'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/Music/Music'))


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
                 render={withSuspense(ProfileContainer)}/>
          <Route path="/dialogs"
                 render={withSuspense(DialogsContainer)}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/news" render={withSuspense(News)}/>
          <Route path="/music" render={withSuspense(Music)}/>
          <Route path="/settings" render={() => <Settings/>}/>
          <Route path="/login" render={withSuspense(Login)}/>
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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