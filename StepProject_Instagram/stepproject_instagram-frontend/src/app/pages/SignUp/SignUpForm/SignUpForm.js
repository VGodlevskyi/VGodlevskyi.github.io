import React from 'react';
import Form from "../../../components/Forms/Form";
import InstagramBrand from "../../../components/SvgIcons/InstagramBrand";
import FormInput from "../../../components/Forms/FormInput";
import FormSubmitButton from "../../../components/Forms/FormSubmitButton";
import {ErrorMessage, Field, Formik} from "formik";
import {NavLink} from "react-router-dom";
// import { object, string } from "yup";
import * as yup from 'yup';
import {useDispatch} from "react-redux";
import {registerUserAction} from "../../../store/actions/authActions";
import './SignUpForm.scss'

const SignUpForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        name: '',
        username: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('this is not a valid email, dummy!')
            .required('this field is required'),
        name: yup
            .string()
            .required('This field is required')
            .min(3, 'Min lenght is 3 simbol'),
        username: yup
            .string()
            .required('This field is required')
            .min(3, 'Min lenght is 3 simbol'),
        password: yup
            .string()
            .required('this field is required')
            .min(5, 'Min length is 5'),
    });


    const submitHandle = (values, {setSubmitting}) => {
        dispatch(registerUserAction(values, () => setSubmitting(false)));
    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandle} validationSchema={validationSchema}>
            {
                ({handleReset, handleSubmit, isSubmitting, errors, touched}) =>
                    <Form onReset={handleReset} onSubmit={handleSubmit}>
                        <div className='signup-form__header'>
                            <InstagramBrand/>
                        </div>
                        <div className='signup-form__inputs'>
                            <Field id="email" as={FormInput} name='email' type='email' placeholder='Email'/>
                            <ErrorMessage name="email"/>

                            <Field id="name" as={FormInput} name='name' type='text' placeholder='Full name'/>
                            <ErrorMessage name="name"/>

                            <Field id="username" as={FormInput} name='username' type='text' placeholder='Username'/>
                            <ErrorMessage name="username"/>

                            <Field id="password" as={FormInput} name='password' type='password' placeholder='Password'/>
                            <ErrorMessage name="password"/>

                        </div>
                        <FormSubmitButton type='submit' disabled={isSubmitting}>SignUp</FormSubmitButton>
                        <NavLink className='signup-form__link' to='/login'>Login</NavLink>
                    </Form>
            }
        </Formik>
    );
};

export default SignUpForm;