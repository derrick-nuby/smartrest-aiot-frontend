import { z } from "zod"

// Product schema for creation
export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name cannot exceed 255 characters"),
  description: z.string().max(1000, "Description cannot exceed 1000 characters").optional(),
  image_url: z.string().url("Must be a valid URL").optional(),
  firmware_version: z.string().optional(),
  is_active: z.boolean().default(true),
})

export type CreateProductFormData = z.infer<typeof createProductSchema>

// Product schema for update
export const updateProductSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name cannot exceed 255 characters").optional(),
  description: z.string().max(1000, "Description cannot exceed 1000 characters").optional(),
  image_url: z.string().url("Must be a valid URL").optional(),
  firmware_version: z.string().optional(),
  is_active: z.boolean().optional(),
})

export type UpdateProductFormData = z.infer<typeof updateProductSchema>
