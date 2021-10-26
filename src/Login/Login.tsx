import React from 'react';
import {Form, Field} from 'react-final-form';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: any) => {

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
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
       <LoginForm onSubmit={onSubmit}/>
    </div>
}