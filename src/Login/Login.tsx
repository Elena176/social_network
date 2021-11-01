import React from 'react';
import {Field, Form, Formik} from 'formik';
import {Input} from '../components/common/FormsControl/FormsControl';
import {validateLoginForm} from '../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormPropsType = {
    onSubmit: (formData: FormDataType) => void
}

const validateForm = (values: any) => {
    const errors = {};
    /*  if (!values.email) {
          errors.email = 'Required';
      } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
          errors.email = 'Invalid email address';
      }*/
    return errors;
}


export const LoginFormFormik = (props: LoginFormPropsType) => {
    const submit = (values: FormDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onSubmit(values)
    }
    return <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div>
                        <Field component={Input} type={'text'} validate={validateLoginForm} name={'email'}
                               placeholder={'email'}/>
                    </div>
                    <div>
                        <Field component={Input} type={'password'} validate={validateLoginForm} name={'password'}
                               placeholder={'password'}/>
                    </div>
                    <div>
                        <Field component={Input} type={'checkbox'} name={'rememberMe'}/>
                        remember me
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        debugger;
        props.login(formData.email, formData.password, formData.rememberMe)
    }
/*if (props.isAuth) {
    return <Redirect to={'/profile'}/>
}*/
    return <div>
        <h1>LOGIN</h1>
        <LoginFormFormik onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {login})(Login);