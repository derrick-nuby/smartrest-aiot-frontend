"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Archive, Headphones } from "lucide-react";

export default function MessagingPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Customer Support</h1>
          <p className="text-muted-foreground">
            Get support and communicate with your SmartRest team
          </p>
        </div>

        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inbox">Support</TabsTrigger>
            <TabsTrigger value="compose">Contact Us</TabsTrigger>
            <TabsTrigger value="archived">History</TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Support Messages
                  <Badge variant="secondary">1 New</Badge>
                </CardTitle>
                <CardDescription>Messages from SmartRest support team</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No support messages</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Messages from our support team will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compose" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Send a message to our support team</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input placeholder="Enter your question or issue" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Describe your issue or question in detail..." />
                  </div>

                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send to Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archived" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Support History</CardTitle>
                <CardDescription>Previous support conversations</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No support history</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Previous support conversations will be stored here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
