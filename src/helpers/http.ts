import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST + '/graphql',
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
