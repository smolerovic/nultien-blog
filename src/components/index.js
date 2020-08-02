/* eslint-disable react/jsx-fragments */
import React from 'react';

import { Header } from './header';
import { HelmetHeader } from './helmet-header';

const AppWrapper = props => {
  const {
    children
  } = props;

  return (
    <React.Fragment>
      <HelmetHeader />
      <Header />
      <main className='wrapper_parent'>
        {children}
      </main>
    </React.Fragment>
  );
};

export default AppWrapper;
