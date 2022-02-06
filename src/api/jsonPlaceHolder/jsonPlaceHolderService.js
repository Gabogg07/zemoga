import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/'

export const getPostList = async () => {
  return axios.get(`${baseURL}posts`)
    .then(( data ) => data);
};

export const getPostComments = async () => {
  return axios.get(`${baseURL}posts`)
    .then(( data ) => data);
};

export const getuserData = async () => {
  return axios.get(`${baseURL}posts`)
    .then(( data ) => data);
};
