import axios, { type AxiosInstance } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// if (!API_BASE_URL) {
//   throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
// }

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;