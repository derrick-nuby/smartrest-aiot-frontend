"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Archive } from "lucide-react";

export default function MessagingPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Communicate with your healthcare team and receive important updates
          </p>
        </div>

        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Messages
                  <Badge variant="secondary">2 New</Badge>
                </CardTitle>
                <CardDescription>Messages from your healthcare team</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No messages from healthcare team</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Messages from your doctors and nurses will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compose" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
                <CardDescription>Contact your doctor or healthcare team</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input placeholder="Enter message subject" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Describe your symptoms or questions..." />
                  </div>

                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send to Healthcare Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archived" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Archived Messages</CardTitle>
                <CardDescription>Previously archived conversations</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No archived messages</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Old conversations will be stored here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
