import { handleAxiosError } from "@/lib/errorHandler";
import axiosInstance from '@/lib/axiosConfig';
import { LoginFormData, UserCreateAccountFormData } from "@/types";

export const createAccount = async (userData: UserCreateAccountFormData) => {
  try {
    const response = await axiosInstance.post('/user', userData);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const loginUser = async (credentials: LoginFormData) => {
  try {
    const response = await axiosInstance.post('/user/login', credentials);

    if (response.data?.token) {
      console.log("Login successful:", response.data);
    }

    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await axiosInstance.post('/user/forgot-password', { email });
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    const response = await axiosInstance.post('/user/reset-password', {
      token,
      newPassword
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw new Error(errorMessage);
  }
};