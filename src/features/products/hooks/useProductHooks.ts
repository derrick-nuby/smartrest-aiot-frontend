import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../services/productServices"
import type { CreateProductRequest, UpdateProductRequest } from "../types/ProductTypes"
import toast from "react-hot-toast"

// Hook to fetch all products with pagination
export const useProducts = (page = 1) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
  })
}

// Hook to fetch a single product
export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
  })
}

// Hook to create a new product
export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productData: CreateProductRequest) => createProduct(productData),
    onSuccess: () => {
      toast.success("Product created successfully")
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create product")
    },
  })
}

// Hook to update a product
export const useUpdateProduct = (productId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productData: UpdateProductRequest) => updateProduct(productId, productData),
    onSuccess: () => {
      toast.success("Product updated successfully")
      queryClient.invalidateQueries({ queryKey: ["products"] })
      queryClient.invalidateQueries({ queryKey: ["product", productId] })
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update product")
    },
  })
}

// Hook to delete a product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
    onSuccess: () => {
      toast.success("Product deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to delete product")
    },
  })
}
