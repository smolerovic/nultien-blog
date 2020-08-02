import { http } from './services';
import { sprintf } from 'sprintf-js';

import {
  API_BLOGPOSTS,
  API_REMOVE_BLOGPOST,
  API_SEARCH_BLOGPOSTS,
  API_EDIT_BLOGPOST,
  API_GET_POSTS_BY_CATEGORY
} from './helper/api-routes';

export function getBlogPosts (cbSuccess, cbError) {
  try {
    return http.get(
      API_BLOGPOSTS,
      null,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}

export function addNewBlogPost (body = {}, cbSuccess, cbError) {
  try {
    return http.post(
      API_BLOGPOSTS,
      body,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}

export function removeBlogPost (id, cbSuccess, cbError) {
  try {
    return http.delete(
      sprintf(API_REMOVE_BLOGPOST, { id }),
      null,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}

export function searchBlogPosts (term, cbSuccess, cbError) {
  try {
    return http.get(
      sprintf(API_SEARCH_BLOGPOSTS, { term }),
      null,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}

export function editBlogPost (body = {}, cbSuccess, cbError) {
  const { id } = body;
  try {
    return http.put(
      sprintf(API_EDIT_BLOGPOST, { id }),
      body,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}

export function getPostByCategory (id, cbSuccess, cbError) {
  try {
    return http.get(
      sprintf(API_GET_POSTS_BY_CATEGORY, { id }),
      null,
      cbSuccess ? (response) => { return cbSuccess(response.data); } : null,
      cbError ? (error) => { return cbError(error); } : null
    );
  } catch (error) {
    console.error(error);
  }
}
