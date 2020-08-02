import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { BLOG_CATEGORIES } from '../../helper/constants';

import { ButtonCmpt } from '../shared-components';

import './sidebar.scss';

const Sidebar = props => {
  const {
    blogContainer = {}
  } = props;

  const { GetPostByCategory, InitialGetBlogPosts, SetCategoryId, RemoveSelectedCategoryId, state: { selectedCategoryId } } = blogContainer;

  const handleCategory = (id) => {
    GetPostByCategory(id);
    SetCategoryId(id);
  };

  const handleClose = () => {
    RemoveSelectedCategoryId();
    InitialGetBlogPosts();
  };

  const renderBlogCategories = () => {
    const blogCategories = BLOG_CATEGORIES;
    return blogCategories.map((item, index) => {
      return (
        <div key={index} className={selectedCategoryId === item.id ? 'activate' : ''}>
          <ButtonCmpt type='link' onClick={() => handleCategory(item.id)} aria-label='Click here to select category.'>{item.name}</ButtonCmpt>
          {selectedCategoryId === item.id && <CloseOutlined onClick={() => handleClose()} />}
        </div>
      );
    });
  };

  return (
    <aside className='sidebar'>
      <div className='sidebar__item'>
        <h3>Blog Categories</h3>
        <div className='sidebar__item_categories'>
          {renderBlogCategories()}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
