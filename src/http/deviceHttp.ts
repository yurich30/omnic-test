import axios from 'axios';

export const deviceHttp = axios.create({
  baseURL: 'https://dev.hub.omnic.solutions/api/2.0.0/public/',
});
