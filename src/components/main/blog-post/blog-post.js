import React from 'react';
import Moment from 'react-moment';
import { get } from 'lodash';

import { ButtonCmpt } from '../../shared-components';

import Placeholder100x100img from './assets/placeholder100x100-img.png';
import Placeholder80x80img from './assets/placeholder80x80-img.png';

import './blog-post.scss';

const BlogPostCmpt = (props) => {
  const {
    blogData = {},
    onHandleDeletePost = () => {},
    openModal = () => {}
  } = props;

  const dateAndTime = get(blogData, 'createdAt', '');

  const handleDeletePost = id => {
    onHandleDeletePost(id);
  };

  const handleEditPost = () => {
    openModal(true, blogData);
  };

  return (
    <section className='blog_post_cmpt'>
      <div className='blog_post_cmpt__item'>
        <div className='blog_post_cmpt__item_header'>
          <img src={Placeholder80x80img} className='blog_post_cmpt__item_img' alt='Some alt text 1' />
          <hgroup className='blog_post_cmpt__item_hgroup'>
            <h2>{blogData.title}</h2>
            <h5>Posted date: <Moment format='DD.MM.YYYY'>{dateAndTime}</Moment> at <Moment format='HH:mm'>{dateAndTime}</Moment> by Value from login container</h5>
          </hgroup>
        </div>
        <div className='blog_post_cmpt__item_buttons'>
          <ButtonCmpt type='primary' ghost onClick={() => handleEditPost()} aria-label='Click here to edit.'>Edit</ButtonCmpt>
          <ButtonCmpt type='danger' onClick={() => handleDeletePost(blogData.id)} aria-label='Click here to delete.'>Delete</ButtonCmpt>
        </div>
      </div>
      <p>{blogData.text}</p>
      <div className='blog_post_cmpt__images'>
        <img src={Placeholder100x100img} alt='Some alt text 2' />
        <img src={Placeholder100x100img} alt='Some alt text 3' />
        <img src={Placeholder100x100img} alt='Some alt text 4' />
      </div>
    </section>
  );
};

export default BlogPostCmpt;
