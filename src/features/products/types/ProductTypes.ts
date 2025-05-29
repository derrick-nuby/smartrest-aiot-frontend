import { z } from "zod"

export interface Product {
  product_id: string
  name: string
  description: string
  image_url: string
  firmware_version: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CreateProductRequest {
  name: string
  description?: string
  image_url?: string
  firmware_version?: string
  is_active?: boolean
}

export interface UpdateProductRequest {
  name?: string
  description?: string
  image_url?: string
  firmware_version?: string
  is_active?: boolean
}

export interface PaginatedProductsResponse {
  current_page: number
  data: Product[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
  links: {
    url: string | null
    label: string
    active: boolean
  }[]
}

export interface CreateProductResponse {
  message: string
  product: Product
}

export interface UpdateProductResponse {
  message: string
  product: Product
}

export interface DeleteProductResponse {
  message: string
}

// Zod schema for product validation
export const productSchema = z.object({
  product_id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  image_url: z.string().nullable().optional(),
  firmware_version: z.string().nullable().optional(),
  is_active: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type ProductSchema = z.infer<typeof productSchema>
