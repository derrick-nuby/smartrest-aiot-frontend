import axiosInstance from "@/lib/axiosConfig";
import { handleAxiosError } from "@/lib/errorHandler";
import type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  PaginatedUsersResponse,
  CreateUserResponse,
  UpdateUserResponse,
  DeleteUserResponse
} from "../types/UserTypes";

// User services
export const getUsers = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`/users?page=${page}`);
    return response.data as PaginatedUsersResponse;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch users"));
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data as User;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch user"));
  }
};

export const createUser = async (data: CreateUserRequest) => {
  try {
    const response = await axiosInstance.post("/users", data);
    return response.data as CreateUserResponse;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to create user"));
  }
};

export const updateUser = async (userId: string, data: UpdateUserRequest) => {
  try {
    const response = await axiosInstance.put(`/users/${userId}`, data);
    return response.data as UpdateUserResponse;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to update user"));
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data as DeleteUserResponse;
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to delete user"));
  }
};
