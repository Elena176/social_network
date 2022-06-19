import React from 'react';
import {createField, Input, Textarea} from '../../common/FormsControl/FormsControl';
import {validateItem} from '../../../utils/validators/validators';
import {Form, Formik, FormikHelpers} from 'formik';
import {ProfileUserType} from '../../../redux/Types';
import {Values} from '../../../redux/profile-reducer';

type ProfileDataFormPropsType = {
  profile: ProfileUserType
  onSubmit: (formData: Values) => void
}

export const ProfileDataForm = ({onSubmit}: ProfileDataFormPropsType) => {
  const submit = (values: Values, {setSubmitting}: FormikHelpers<Values>
  ) => {
    onSubmit(values)
    setSubmitting(false)
  }
  return <div>
    <Formik initialValues={{fullName: '', lookingForAJobDescription: '', aboutMe: '', lookingForAJob: false}}
            onSubmit={submit}>
      {({isSubmitting}) => (
        <Form>
          <div>
            <button type="submit">Save</button>
          </div>
          <div>
            <b>Full name</b>: {createField(Input, 'text', validateItem(10), 'fullName', 'Full name')}
          </div>
          <div>
            <b>Looking for a job</b>: {createField('', 'checkbox', () => {
          }, 'lookingForAJob', 'Looking for a job')}
          </div>
          <div>
            <b>My professional
              skills</b>: {createField(Textarea, 'text', validateItem(50), 'lookingForAJobDescription', 'My professional skills')}
          </div>
          <div>
            <b>About me</b>: {createField(Textarea, 'text', validateItem(50), 'aboutMe', 'About me')}
          </div>
          {/*<div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ProfileContactsType]}/>
    })}
    </div>*/}
        </Form>
      )}
    </Formik>
  </div>
}