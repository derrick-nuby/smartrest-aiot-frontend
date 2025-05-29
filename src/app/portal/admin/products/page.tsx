"use client";

import { ProductList, ProductForm, ProductsTable } from "@/features/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Package, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Product Management</h1>
            <p className="text-muted-foreground">
              Manage SmartRest mattress products, inventory, and specifications
            </p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {showCreateForm && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Product</CardTitle>
              <CardDescription>Add a new SmartRest mattress product to the catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <ProductForm onSubmit={() => setShowCreateForm(false)} />
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Table View
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">24</div>
                  <p className="text-sm text-muted-foreground">Active products</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">6</div>
                  <p className="text-sm text-muted-foreground">Product categories</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Low Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">3</div>
                  <p className="text-sm text-muted-foreground">Need restocking</p>
                </CardContent>
              </Card>
            </div>
            <ProductList />
          </TabsContent>

          <TabsContent value="table" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Products Table</CardTitle>
                <CardDescription>Detailed view of all products with management options</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                  <CardDescription>Sales and usage analytics</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics charts will be displayed here</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Status</CardTitle>
                  <CardDescription>Stock levels and alerts</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Inventory charts will be displayed here</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
