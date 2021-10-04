import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsTypeForRedirect = {
    isAuth: boolean
}

type AuthRedirectType = MapStateToPropsTypeForRedirect
let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsTypeForRedirect => ({
    isAuth: state.auth.isAuth,
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<AuthRedirectType> {
        render() {
            let {isAuth, ...restProps} = this.props;
            //проверка на авторизацию
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as T} />
        }
    }
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectAuthRedirectComponent;
}