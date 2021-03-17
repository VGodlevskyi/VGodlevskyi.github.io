import React from 'react';
import Header from "../../components/Header/Header";
import './404.scss'

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className='error-page'>
        <div className='container'>
          <div>
            <p className='error-page__message'>404 | Page not found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;