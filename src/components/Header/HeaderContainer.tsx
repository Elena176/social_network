import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {DataLoginPropsType, DataPropsType} from '../../redux/store';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (data: DataPropsType) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<DataLoginPropsType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true                                           //настройки запроса
        })
            .then(response => {
                if (response.data.resultCode === 0) {                     //проверка залогинен пользователь или нет
                    this.props.setAuthUserData(response.data.data);
                }
            });
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
    login: state.auth.data && state.auth.data.login,
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);