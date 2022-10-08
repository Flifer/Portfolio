import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SaveButton from "./SaveButton";
import './style.css'

const FORM_VALIDATION_SCHEMA = {
  name: Yup.string()
    .required('Name required')
    .min(3, 'Min length 3'),
  email: Yup.string().required('Email required').email('Email format required'),
  telNumber: Yup.string().required('Telephone required').matches(/^[0-9]{12}$/, '12 symbols required')
};

export default function App() {

  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }
    
  return (
    <>
    <div className='container'></div>
    <div className='container-content'>
      <h3>Sign in</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          telNumber: '',
        }}
        validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
        onSubmit={onSubmit}
        autocomplete="off"
      >
        <FormikForm>
          <label htmlFor="name">Name<br/>
          <Field type="text" name="name" id='name' className='input-item'/>
          <ErrorMessage name="name" /><br/>
          </label> <br/>

          <label htmlFor="email">Email<br/>
          <Field type="email" name="email" id='email' className='input-item'/>
          <ErrorMessage name="email" /><br/>
          </label> <br/>

          <label htmlFor="telNumber">Telephone<br/>
          <Field type="tel" name="telNumber" id='telNumber' className='input-item'/>
          <ErrorMessage name="telNumber" /><br/>
          </label> <br/><br/>
          
          <SaveButton />
        </FormikForm>
      </Formik>
    </div>
    </>
  )
}