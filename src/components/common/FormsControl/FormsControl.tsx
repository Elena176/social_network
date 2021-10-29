import s from './FormsControls.module.css'


export const Textarea = ({field, form, ...props}: any) => {
    return (
    <div className={s.error}>
        <textarea {...field}{...props}/>
       {/* { form.touched && form.errors &&  <span> {form.errors}</span> }*/}
    </div>
    )
}