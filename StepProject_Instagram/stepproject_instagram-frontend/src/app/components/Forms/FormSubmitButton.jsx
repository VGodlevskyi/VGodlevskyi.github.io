import React from 'react';
import './FormSubmitButton.scss';

const FormSubmitButton = ({ children, ...props }) => {
  return (
    <button className='form_submit' { ...props }>
      { children }
    </button>
  );
};

export default FormSubmitButton;