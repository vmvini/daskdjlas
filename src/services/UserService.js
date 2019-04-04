import axios from 'axios';
import cookie from 'cookie-machine';
const server = 'http://localhost:5000';

const jwt = {
  decode: function (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
};

export const isAuthenticated = () => {
  const token = cookie.get('token');
  if ( !token ) {
    return false;
  }
  try {
    const decode = jwt.decode(token);
    if ( !decode ) {
      return false;
    }
    return decode;
  } catch(e) {
    return false;
  }
};

export const me = () => {
  return isAuthenticated();
};

export const signin = (email, password) => {
  return axios
  .post(`${server}/auth/login`, {
    username: email,
    password: password
  })
  .then((res) => addToken(res.data.token));
};

function addToken(token) {
  cookie.set('token', token);
  return Promise.resolve();
}

export const signup = (email, password) => {
  return axios
  .post(`${server}/auth/signup`, {
    username: email,
    password: password
  })
  .then((res) => addToken(res.data.token));
};

export const post = (content) => {
  return axios
  .post(`${server}/api/posts`, {
    text: content
  });
};

export const feed = () => {
  debugger;
};

export const follow = () => {
  debugger;
};

export const userInfo = () => {
  debugger;
};