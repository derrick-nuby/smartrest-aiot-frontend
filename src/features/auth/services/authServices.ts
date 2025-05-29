import axiosInstance from "@/lib/axiosConfig";
import { handleAxiosError } from "@/lib/errorHandler";
import type {
  AuthResponse,
  MessageResponse,
  TokenResponse,
  User
} from "../types";
import {
  RegisterFormData,
  LoginFormData,
  ForgotPasswordFormData,
  ResetPasswordFormData,
  ChangePasswordFormData
} from "../schemas/authSchemas";

// Register service
export const registerUser = async (data: RegisterFormData) => {
  try {
    const response = await axiosInstance.post<AuthResponse>("/auth/register", data);
    // Store token in localStorage upon successful registration
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Registration failed"));
  }
};

// Email verification service
export const verifyEmail = async (id: string, hash: string) => {
  try {
    const response = await axiosInstance.get<MessageResponse>(`/auth/verify-email/${id}/${hash}`);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Email verification failed"));
  }
};

// Login service
export const loginUser = async (data: LoginFormData) => {
  try {
    const response = await axiosInstance.post<AuthResponse>("/auth/login", data);
    // Store token in localStorage upon successful login
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    // Store user data and role in separate keys
    if (response.data.user) {
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      localStorage.setItem("userRole", response.data.user.role || "");
    }
    if (response.data.token) {
      document.cookie = `token=${response.data.token}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
    }

    // Store user data and role in cookies
    if (response.data.user) {
      document.cookie = `userData=${encodeURIComponent(JSON.stringify(response.data.user))}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
      document.cookie = `userRole=${response.data.user.role || ""}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`;
    }
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Login failed"));
  }
};

// Logout service
export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post<MessageResponse>("/auth/logout");
    // Remove token from localStorage upon successful logout
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Logout failed"));
  }
};

// Get current user profile service
export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get<User>("/auth/me");
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch user profile"));
  }
};

// Refresh token service
export const refreshToken = async () => {
  try {
    const response = await axiosInstance.post<TokenResponse>("/auth/refresh");
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Token refresh failed"));
  }
};

// Forgot password service
export const forgotPassword = async (data: ForgotPasswordFormData) => {
  try {
    const response = await axiosInstance.post<MessageResponse>("/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Password reset request failed"));
  }
};

// Reset password service
export const resetPassword = async (data: ResetPasswordFormData) => {
  try {
    const response = await axiosInstance.post<MessageResponse>("/auth/reset-password", data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Password reset failed"));
  }
};

// Change password service
export const changePassword = async (data: ChangePasswordFormData) => {
  try {
    const response = await axiosInstance.post<MessageResponse>("/auth/change-password", data);
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Password change failed"));
  }
};