import React from 'react';
import Form from "../../../components/Forms/Form";
import InstagramBrand from "../../../components/SvgIcons/InstagramBrand";
import { Field, Formik } from "formik";
import FormInput from "../../../components/Forms/FormInput";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import { NavLink } from "react-router-dom";
import { object, string } from "yup";
import { authenticateUserAction } from "../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import authMessageSelector from "../../../store/selectors/authMessageSelector";
import './LoginForm.scss'

const LoginForm = () => {

  const dispatch = useDispatch();
  const authMessage = useSelector(authMessageSelector)

  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = object({
    username: string().min(3).required(),
    password: string().min(3).required()
  });

  const submitHandle = (values, { setSubmitting }) => {
    dispatch(authenticateUserAction(values, () => setSubmitting(false)));
  };

  return (
    <Formik initialValues={ initialValues } onSubmit={ submitHandle } validationSchema={ validationSchema }>
      {
        ({ handleReset, handleSubmit, isSubmitting }) =>
          <Form onReset={ handleReset } onSubmit={ handleSubmit }>
            <div className='login-form__header'>
              <InstagramBrand/>
            </div>
            <div className='login-form__inputs'>
              <Field as={ FormInput } name='username' type='text' placeholder='Username or email'/>
              <Field as={ FormInput } name='password' type='password' placeholder='Password'/>
              {
                authMessage && <p>{ authMessage }</p>
              }
            </div>
            <FormSubmitButton type='submit' disabled={ isSubmitting }>
              Login
            </FormSubmitButton>
            <NavLink className='login-form__link' to='/signup'>Sign Up</NavLink>
          </Form>
      }
    </Formik>
  );
};

export default LoginForm;