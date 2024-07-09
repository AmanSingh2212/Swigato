import axios from 'axios';

export const API_URL = "https://swigato-server-production-8e99.up.railway.app";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


