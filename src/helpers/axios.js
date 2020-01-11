import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cheza-way-farer.herokuapp.com/api/v2',
});

export default axiosInstance;