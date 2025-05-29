"use client";

import { ProductList } from "@/features/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">SmartRest Products</h1>
          <p className="text-muted-foreground">
            Explore our premium smart mattress collection designed for optimal sleep and health
          </p>
        </div>

        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="catalog">Product Catalog</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="support">Product Support</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">8</div>
                  <p className="text-sm text-muted-foreground">New arrivals</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best Sellers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <p className="text-sm text-muted-foreground">Top rated products</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">6</div>
                  <p className="text-sm text-muted-foreground">Product types</p>
                </CardContent>
              </Card>
            </div>
            <ProductList />
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Order History
                  <Badge variant="secondary">3 Orders</Badge>
                </CardTitle>
                <CardDescription>Track your SmartRest product orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">SmartRest Pro Mattress</h4>
                      <p className="text-sm text-muted-foreground">Order #SR-2024-001</p>
                    </div>
                    <Badge>Delivered</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">SmartRest Comfort Plus</h4>
                      <p className="text-sm text-muted-foreground">Order #SR-2024-002</p>
                    </div>
                    <Badge variant="secondary">In Transit</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Wishlist
                </CardTitle>
                <CardDescription>Save products for later purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Your wishlist is empty. Browse our products and save your favorites!
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Support</CardTitle>
                <CardDescription>Get help with your SmartRest products</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Product Setup Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Troubleshooting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Warranty Information
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
