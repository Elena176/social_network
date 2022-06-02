import s from './FormsControls.module.css'
import {Field} from 'formik';
import React from 'react';

export const Textarea = ({field, form: {touched, errors, isValid}, ...props}: any) => {
  return (
    <div>
            <textarea
              {...field} {...props}
              className={
                !isValid && touched[field.name] && errors[field.name] ? s.error : ''
              }
            />
      {touched[field.name] && errors[field.name] && (
        <div className={s.errorMessage}>{errors[field.name]}</div>
      )}
    </div>
  )
}

export const Input = ({field, form: {touched, errors, isValid}, ...props}: any) => {

  return (
    <div>
      <input
        {...field} {...props}
        className={
          !isValid && touched[field.name] && errors[field.name] ? s.error : ''
        }
      />
      {!isValid && touched[field.name] && errors[field.name] && (
        <div className={s.errorMessage}>{errors[field.name]}</div>
      )}
    </div>
  )
}

export const createField = (component: any, type: string, validate: (values: string) => void, name: string,  placeholder: string) => (
  <div>
  <Field component={component} type={type} validate={validate} name={name}
         placeholder={placeholder}/>
  </div>
)