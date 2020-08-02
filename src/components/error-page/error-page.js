import React from 'react';

import { ROOT_ROUTE } from '../../helper/routes';

import ErrorImage from './assets/error-image-min.png';

import './error-page.scss';

const ErrorPage = () => {
  return (
    <div className='error_section'>
      <style>{'.header_cmpt{display: none;}'}</style>
      <div className='error_section__item'>
        <h1>Ooops! <br />Page Not Found</h1>
        <a href={ROOT_ROUTE} className='error_section__item__btn'>BACK TO HOME SCREEN</a>
      </div>
      <img src={ErrorImage} alt='Blog error' className='error_section__image' />
    </div>
  );
};

export default ErrorPage;
