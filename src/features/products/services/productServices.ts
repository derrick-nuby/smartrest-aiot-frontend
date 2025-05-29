import axiosInstance from "@/lib/axiosConfig"
import { handleAxiosError } from "@/lib/errorHandler"
import type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
  PaginatedProductsResponse,
  CreateProductResponse,
  UpdateProductResponse,
  DeleteProductResponse,
} from "../types/ProductTypes"

// Product services
export const getProducts = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`/products?page=${page}`)
    return response.data as PaginatedProductsResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch products"))
  }
}

export const getProduct = async (productId: string) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`)
    return response.data as Product
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to fetch product"))
  }
}

export const createProduct = async (data: CreateProductRequest) => {
  try {
    const response = await axiosInstance.post("/products", data)
    return response.data as CreateProductResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to create product"))
  }
}

export const updateProduct = async (productId: string, data: UpdateProductRequest) => {
  try {
    const response = await axiosInstance.put(`/products/${productId}`, data)
    return response.data as UpdateProductResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to update product"))
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axiosInstance.delete(`/products/${productId}`)
    return response.data as DeleteProductResponse
  } catch (error) {
    throw new Error(handleAxiosError(error, "Failed to delete product"))
  }
}
