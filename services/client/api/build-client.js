import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'http://auth:3001',
      headers: req.headers,
      withCredentials: true,
    });
  } else {
    // We are on the browser
    return axios.create({
      baseURL: 'http://localhost:3001',
      withCredentials: true,
    });
  }
};
