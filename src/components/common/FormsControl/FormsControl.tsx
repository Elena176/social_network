import s from './FormsControls.module.css'

export const Textarea = ({field, form, ...props}: any) => {
    const hasError = form.touched && form.errors;
    return (
    <div className={ s.formControl + '' + (hasError ? s.error : '')}>
        <div>
        <textarea {...field}{...props}/>
        </div>
        { hasError &&  <span> {form.errors.newPostText} </span> }

    </div>
    )
}