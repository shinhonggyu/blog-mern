import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://lamadevblog.herokuapp.com/api/',
});
