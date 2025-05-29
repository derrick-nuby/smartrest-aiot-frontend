// file: src/lib/axiosConfig.ts

import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper function to get user data
export const getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

// Helper function to get user role
export const getUserRole = () => {
  return localStorage.getItem("userRole") || "";
};

// Function to clear auth data on logout
export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  localStorage.removeItem("userRole");
};

// Add a request interceptor to include the auth token in requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance

