import axios from 'axios';


export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=catvas';

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    payload: request,
    type: CREATE_POST,
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    payload: request,
    type: DELETE_POST,
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    payload: request,
    type: FETCH_POST,
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    payload: request,
    type: FETCH_POSTS,
  };
}
