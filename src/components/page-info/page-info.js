import React from 'react';

import { AlertCmpt } from '../shared-components';
import { AddOrEditBlogPostModal } from '../main/add-edit-blog-post-modal';

import './page-info.scss';

const PageInfo = (props) => {
  const {
    blogContainer = {}
  } = props;

  const { ResetSuccessMessage, ResetErrorMessage, state: { message, error } } = blogContainer;

  const handleResetSuccessMessage = () => {
    ResetSuccessMessage();
  };

  const handleResetErrorMessage = () => {
    ResetErrorMessage();
  };

  const renderSuccessMessage = () => {
    if (!message) return null;
    return (
      <AlertCmpt message={message} type='success' className='page_info__alert' onClose={handleResetSuccessMessage} />
    );
  };

  const renderErrorMessage = () => {
    if (!error) return null;
    return (
      <AlertCmpt message={error} type='error' className='page_info__alert' onClose={handleResetErrorMessage} />
    );
  };

  const renderAddOrEditBlogPostModal = () => {
    return (
      <div className='page_info__blog_post_modal'>
        <AddOrEditBlogPostModal blogContainer={blogContainer} />
      </div>
    );
  };

  return (
    <div className='page_info'>
      <h1>Welcome to My Blog</h1>
      {renderSuccessMessage()}
      {renderErrorMessage()}
      {renderAddOrEditBlogPostModal()}
    </div>
  );
};

export default PageInfo;
