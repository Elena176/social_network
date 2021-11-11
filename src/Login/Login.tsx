import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Input} from '../components/common/FormsControl/FormsControl';
import {validateItem} from '../utils/validators/validators';
import {connect} from 'react-redux';
import {logIn} from '../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import s from './../components/common/FormsControl/FormsControls.module.css';

const validateLoginForm = validateItem(20)

export const LoginFormFormik = (props: LoginFormPropsType) => {
    const submit = (values: FormDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onSubmit(values)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <Field component={Input} type={'text'} validate={validateItem} name={'email'}
                               placeholder={'email'}/>
                    </div>
                    <div>
                        <Field component={Input} type={'password'} validate={validateLoginForm} name={'password'}
                               placeholder={'password'}/>
                    </div>
                    <label className={''}>
                        <Field component={Input} type={'checkbox'} name={'rememberMe'}/>
                        remember me
                    </label>
                    <div>
                        {props.error && <div className={s.errorMessage}> {props.error} </div>}
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginFormFormik onSubmit={onSubmit} error={props.error}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error,
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logIn})(Login);


//types
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormPropsType = {
    onSubmit: (formData: FormDataType) => void
    error: string | null
}

type MapStatePropsType = {
    isAuth: boolean
    error: string | null
}

type MapDispatchPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType;