import React from 'react';
import './Form.scss';

const Form = ({ children, ...props }) => {
  return (
    <div className='form_wrapper'>
      <form className='form' { ...props }>
        { children }
      </form>
    </div>
  );
};

export default Form;