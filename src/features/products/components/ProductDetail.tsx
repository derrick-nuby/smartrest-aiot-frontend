"use client"

import { useProduct } from "../hooks/useProductHooks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Edit, Loader2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductDetailProps {
  productId: string
  onEdit?: () => void
  backLink?: string
}

export const ProductDetail = ({ productId, onEdit, backLink = "/products" }: ProductDetailProps) => {
  const { data: product, isLoading, isError } = useProduct(productId)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive">Failed to load product details. Please try again later.</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link href={backLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href={backLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        {onEdit && (
          <Button onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Product
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription>Product ID: {product.product_id}</CardDescription>
            </div>
            <Badge variant={product.is_active ? "default" : "outline"} className="ml-2">
              {product.is_active ? "Active" : "Inactive"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="relative h-64 w-full mb-6 rounded-md overflow-hidden">
            <Image
              src={product.image_url || "/placeholder.svg?height=256&width=512"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="text-muted-foreground mt-1">{product.description || "No description available"}</p>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Firmware Version</h3>
                <p className="text-muted-foreground mt-1">{product.firmware_version || "N/A"}</p>
              </div>
              <div>
                <h3 className="font-medium">Created At</h3>
                <p className="text-muted-foreground mt-1">{new Date(product.created_at).toLocaleString()}</p>
              </div>
              <div>
                <h3 className="font-medium">Last Updated</h3>
                <p className="text-muted-foreground mt-1">{new Date(product.updated_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <p className="text-sm text-muted-foreground">
            This product information was last updated on {new Date(product.updated_at).toLocaleDateString()}
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
