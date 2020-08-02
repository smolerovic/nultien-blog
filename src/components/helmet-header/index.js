import React from 'react';
import Helmet from 'react-helmet';
import { startCase, lowerCase } from 'lodash';
import { useLocation } from 'react-router-dom';

const HelmetHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const title = startCase(lowerCase(pathname));
  const pageTitle = title !== '' ? `Nultien Blog - ${title}` : 'Nultien Blog';

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=2.0' />
      <title>{pageTitle}</title>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1890ff' />
      <meta name='msapplication-TileColor' content='#1890ff' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='description' content='Some description' />
      {/* <meta property='og:url' content='' /> */}
      {/* <meta property='og:image' content='' /> */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content='Some description' />
      <meta name='tags' content='Some tags' />
      <meta name='keywords' content='Some keywords' />
    </Helmet>
  );
};

export { HelmetHeader };

export default HelmetHeader;
