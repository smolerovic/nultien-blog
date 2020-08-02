import React from 'react';

import LoaderImage from './assets/loader-image.svg';

import './full-screen-loader.scss';

const FullScreenLoaderCmpt = (props) => {
  const {
    hidden
  } = props;

  if (hidden) return null;
  return (
    <div className='full_screen_loader_cmpt'>
      <img src={LoaderImage} alt='Nultien blog loader' />
    </div>
  );
};

FullScreenLoaderCmpt.defaultProps = {
  hidden: true
};

export default FullScreenLoaderCmpt;
