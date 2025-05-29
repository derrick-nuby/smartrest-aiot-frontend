"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageCircle, Archive } from "lucide-react";

export default function MessagingPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Messaging Center</h1>
          <p className="text-muted-foreground">
            Secure communication system for patients, doctors, and healthcare teams
          </p>
        </div>

        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Inbox Messages
                  <Badge variant="secondary">3 New</Badge>
                </CardTitle>
                <CardDescription>Recent messages and notifications</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No messages in inbox</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Messaging functionality will be implemented here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sent Messages</CardTitle>
                <CardDescription>Messages you have sent</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">No sent messages</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Sent messages will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compose" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Compose New Message</CardTitle>
                <CardDescription>Send a message to patients, doctors, or staff</CardDescription>
              </CardHeader>              <CardContent>
                <div className="space-y-4">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="patient">Patient</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input placeholder="Enter message subject" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here..." />
                  </div>

                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
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
                  <p className="text-sm text-muted-foreground">Archived conversations will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
