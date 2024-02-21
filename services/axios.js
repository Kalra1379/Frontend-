import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL,
});

// Add a request interceptor to include the Bearer token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to the login page or handle the unauthorized access
      localStorage.clear()
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
