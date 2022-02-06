import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/'

export const getPostList = async () => {
  return axios.get(`${baseURL}posts`)
    .then(( data ) => data);
};

export const getPostComments = async (postId) => {
  return axios.get(`${baseURL}posts/${postId}/comments`)
    .then(( data ) => data);
};

export const getUserData = async (userId) => {
  return axios.get(`${baseURL}users/${userId}`)
    .then(( data ) => data);
};
