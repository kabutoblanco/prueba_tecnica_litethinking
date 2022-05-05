import axios from 'axios';

// const API_URL = 'https://mdquilindo.pythonanywhere.com/'
const API_URL = '/';

export const AuthHeader = () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  config.headers['Authorization'] = 'Token ' + token;

  return config;
};

export const https = axios.create({
  baseURL: API_URL,
});
