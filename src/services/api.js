import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: process.env.REACT_URL_API || 'http://localhost:3333',
});

export default api;
