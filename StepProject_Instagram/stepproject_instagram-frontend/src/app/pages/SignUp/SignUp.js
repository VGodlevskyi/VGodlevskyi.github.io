import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authTokenSelector from "../../store/selectors/authTokenSelector";
import SignUpForm from "./SignUpForm/SignUpForm";
import './SignUp.scss'

const SignUp = () => {

  const token = useSelector(authTokenSelector);

  return (
    <>
      {
        token
          ? <Redirect to='/'/>
          : <main className='signup-page'>
            <div className="signup-page__inner">
              <SignUpForm/>
            </div>
          </main>
      }
    </>
  );
};

export default SignUp;