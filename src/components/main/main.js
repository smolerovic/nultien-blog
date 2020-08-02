/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Subscribe } from 'unstated';

import { BlogContainer } from '../../container-services';
import { ROOT_ROUTE } from '../../helper/routes';

import { PageInfo } from '../page-info';
import { BlogPostCmpt } from './blog-post';
import { Sidebar } from '../sidebar';
import { FullScreenLoaderCmpt } from '../shared-components';

import './main.scss';

const MainComponent = (props) => {
  const {
    blogContainer = {}
  } = props;

  const { state: { data, fetching, searchValue }, InitialGetBlogPosts, RemoveBlogPost, OpenModal } = blogContainer;

  useEffect(() => {
    InitialGetBlogPosts();
  }, []);

  const handleDeletePost = (id) => {
    RemoveBlogPost(id);
  };

  const renderBlogPostCmpt = () => {
    if (data && data.length) {
      return data.map((item, index) => {
        return (
          <BlogPostCmpt
            blogData={item}
            onHandleDeletePost={handleDeletePost}
            openModal={OpenModal}
            key={index}
          />
        );
      });
    }
  };

  const renderNoPostMessage = () => {
    if (data.length || searchValue) return null;
    return (
      <div className='no_blog_post_message'>
          There is no blog post.
      </div>
    );
  };

  const renderSearchMessage = () => {
    if (searchValue && !data.length) {
      return (
        <div className='no_search_result'>
          <p>Your search <b>"{searchValue}"</b> does not match any blog post.</p>
          <p>Please click  <b>"x"</b> to clear search and try again with different value.</p>
          <a href={ROOT_ROUTE}>Back</a>
        </div>
      );
    }
  };

  return (
    <article className='wrapper'>
      <FullScreenLoaderCmpt hidden={!fetching} />
      <Sidebar blogContainer={blogContainer} />
      <PageInfo blogContainer={blogContainer} />
      <div className='main_content'>
        {renderBlogPostCmpt()}
        {renderNoPostMessage()}
        {renderSearchMessage()}
      </div>
    </article>
  );
};

const Main = props => {
  return (
    <Subscribe to={[BlogContainer]}>
      {(blogContainer) =>
        <MainComponent
          blogContainer={blogContainer}
          {...props}
        />}
    </Subscribe>
  );
};

export default Main;
