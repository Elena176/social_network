import React from 'react';
import {Field, Form, Formik} from 'formik';
import {createField, Input} from '../components/common/FormsControl/FormsControl';
import {validateItem} from '../utils/validators/validators';
import {connect} from 'react-redux';
import {logIn} from '../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import s from './../components/common/FormsControl/FormsControls.module.css';
import {PATH} from '../enum/routes/routes';

const validateLoginForm = validateItem(30)

export const LoginFormFormik: React.FC<LoginFormPropsType> = ({onSubmit, error, captchaUrl}) => {
  const submit = (values: FormDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    debugger;
    onSubmit(values)
    setSubmitting(false)
  }
  return <div>
    <Formik
      initialValues={{email: '', password: '', rememberMe: false, captcha: ''}}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          {createField(Input, 'text', validateLoginForm, 'email', 'email')}
          {createField(Input, 'password', validateLoginForm, 'password', 'password')}
          <label className={''}>
            <Field component={Input} type={'checkbox'} name={'rememberMe'}/>
            remember me
          </label>
          <div>
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField(Input, 'text', ()=> {}, 'captcha', 'Symbols from image')}
            {error && <div className={s.errorMessage}> {error} </div>}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>Login</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
}

const Login: React.FC<LoginPropsType> = ({isAuth, error, logIn, captchaUrl}) => {
  const onSubmit = (formData: FormDataType) => {
    logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  if (isAuth) {
    return <Redirect to={PATH.PROFILE}/>
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginFormFormik onSubmit={onSubmit} error={error} captchaUrl={captchaUrl}/>
  </div>
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl
  }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logIn})(Login);


//types
type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: null | string
}

type LoginFormPropsType = {
  onSubmit: (formData: FormDataType) => void
  error: string | null
  captchaUrl: null | string
}

type MapStatePropsType = {
  isAuth: boolean
  error: string | null
  captchaUrl: null | string
}

type MapDispatchPropsType = {
  logIn: (email: string, password: string, rememberMe: boolean, captcha: null | string) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType;