import toast from "react-hot-toast";
import { createAccount, loginUser, requestPasswordReset, resetPassword } from "@/services/userService";
import { LoginFormData, User, UserCreateAccountFormData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data),
    onSuccess: (response: { user: User; }) => {
      const role = response.user.role ? "admin" : "client";
      toast.success("Logged in successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "client") {
        navigate("/client");
      } else {
        toast.error("Unknown user role");
      }
    },
    onError: (error: Error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: UserCreateAccountFormData) => createAccount(data),
    onSuccess: () => {
      toast.success("Account created successfully");
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.error(`Registration failed: ${error.message}`);
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email: string) => requestPasswordReset(email),
    onSuccess: () => {
      toast.success("Password reset link sent to your email");
    },
    onError: (error: Error) => {
      toast.error(`Failed to send reset link: ${error.message}`);
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ token, newPassword }: { token: string; newPassword: string; }) =>
      resetPassword(token, newPassword),
    onSuccess: () => {
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.error(`Password reset failed: ${error.message}`);
    },
  });
};