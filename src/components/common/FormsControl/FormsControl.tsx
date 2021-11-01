import s from './FormsControls.module.css'

export const Textarea = ({field, form: { touched, errors}, ...props}: any) => {
    return (
        <div>
            <textarea
                {...field} {...props}
            />
            {touched[field.name] && errors[field.name] && (
                <div className={s.errorMessage}>{errors[field.name]}</div>
            )}
        </div>
    )
}

export const Input = ({field, form: { touched, errors, isValid}, ...props}: any) => {

    return (
        <div>
            <input
                {...field} {...props}
                className={
                    !isValid && touched[field.name] && errors[field.name] ? s.error : ""
                }
            />
            { !isValid && touched[field.name] && errors[field.name] && (
                <div className={s.errorMessage}>{errors[field.name]}</div>
            )}
        </div>
    )
}