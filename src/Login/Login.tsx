import React from 'react';
import {Field, Form, Formik } from 'formik';



type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
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


export const LoginFormFormik = (props: LoginPropsType) => {
    const submit = (values: FormDataType, { setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        props.onSubmit(values)
    }
    return <div>
        <Formik
            initialValues={{ login: '', password: '', rememberMe: false}}
            validate={validateForm}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={'input'}/>
                    </div>
                    <div>
                        <Field  placeholder={'password'} name={'password'} component={'input'}/>
                    </div>
                    <div>
                        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
                        remember me
                    </div>
                    <div>
                        <button type='button'>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}


/*export const LoginForm = (props: any) => {

    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field  placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
                )}
        </Form>
       )
}*/


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginFormFormik onSubmit={onSubmit}/>
     {/*  <LoginForm onSubmit={onSubmit}/>*/}
    </div>
}