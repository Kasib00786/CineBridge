import axios from "axios";
import BASE_URL from "../config/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// Automatically attach JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
