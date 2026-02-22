import axios from 'axios';
import { BASE_URL } from './endpoints';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

// Add a request interceptor to add the auth token to headers
apiClient.interceptors.request.use(
  (config) => {
    if (store) {
      const state = store.getState();
      const token = state.auth?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
