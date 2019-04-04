import axios from 'axios';
import cookie from 'cookie-machine';

axios.interceptors.request.use(function(config) {
  const token = cookie.get('token');

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});