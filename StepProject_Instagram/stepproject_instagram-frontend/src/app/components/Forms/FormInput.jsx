import React from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  return (
    <input className='form_input' { ...props }/>
  );
};

export default FormInput;