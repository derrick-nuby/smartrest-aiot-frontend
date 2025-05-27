"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  refreshToken,
  forgotPassword,
  resetPassword,
  changePassword,
  verifyEmail
} from "../services/authServices";
import {
  RegisterFormData,
  LoginFormData,
  ForgotPasswordFormData,
  ResetPasswordFormData,
  ChangePasswordFormData
} from "../schemas/authSchemas";
import { User } from "../types";

// Register hook
export function useRegister() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterFormData) => registerUser(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Registration successful");
      router.push("/auth/login"); // Redirect to home page after successful registration
    },
    onError: (error: Error) => {
      toast.error(error.message || "Registration failed");
    },
  });
}

// Email verification hook
export function useVerifyEmail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, hash }: { id: string; hash: string; }) => verifyEmail(id, hash),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Email verified successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Email verification failed");
    },
  });
}

// Login hook
export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Login successful");
      router.push("/portal/user"); // Redirect to home page after successful login
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed");
    },
  });
}

// Logout hook
export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      toast.success("Logout successful");
      router.push("/auth/login"); // Redirect to login page after logout
    },
    onError: (error: Error) => {
      toast.error(error.message || "Logout failed");
    },
  });
}

// Get current user hook
export function useCurrentUser() {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Refresh token hook
export function useRefreshToken() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refreshToken,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Token refresh failed");
    },
  });
}

// Forgot password hook
export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordFormData) => forgotPassword(data),
    onSuccess: () => {
      toast.success("Password reset link sent to your email");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Password reset request failed");
    },
  });
}

// Reset password hook
export function useResetPassword() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ResetPasswordFormData) => resetPassword(data),
    onSuccess: () => {
      toast.success("Password has been reset successfully");
      router.push("/auth/login"); // Redirect to login page after password reset
    },
    onError: (error: Error) => {
      toast.error(error.message || "Password reset failed");
    },
  });
}

// Change password hook
export function useChangePassword() {
  return useMutation({
    mutationFn: (data: ChangePasswordFormData) => changePassword(data),
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Password change failed");
    },
  });
}