"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, CalendarIcon, Phone, Mail, User, Heart, Pill } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PatientProfile {
  patient_id: string;
  national_id: string | null;
  date_of_birth: string | null;
  sex: string | null;
  created_at: string;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
  health_conditions: string | null;
  medications: string | null;
}

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  phone: string;
  user_id: string;
  role: string;
  patient_profile: PatientProfile;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No authentication token found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:8000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="container max-w-4xl mx-auto py-10 px-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button className="mt-4" onClick={() => router.push("/login")}>
          Go to Login
        </Button>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="container max-w-4xl mx-auto py-10 px-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Data</AlertTitle>
          <AlertDescription>No user data available.</AlertDescription>
        </Alert>
      </div>
    );
  }

  const initials = `${userData.first_name.charAt(0)}${userData.last_name.charAt(0)}`.toUpperCase();
  const joinDate = new Date(userData.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback className="text-xl">{initials}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">
              {userData.first_name} {userData.last_name}
            </h2>
            <Badge className="mt-2" variant={userData.role === "patient" ? "default" : "outline"}>
              {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}
            </Badge>
            <div className="w-full mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{userData.phone || "Not provided"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <span>Joined {joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="medical">Medical Info</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">First Name</h3>
                      <p>{userData.first_name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Name</h3>
                      <p>{userData.last_name}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                    <p>{userData.email}</p>
                    {!userData.email_verified_at && <p className="text-xs text-amber-600 mt-1">Email not verified</p>}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                    <p>{userData.phone || "Not provided"}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">User ID</h3>
                    <p className="text-xs font-mono">{userData.user_id}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medical" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Your health details and emergency contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Date of Birth</h3>
                      <p>
                        {userData.patient_profile.date_of_birth
                          ? new Date(userData.patient_profile.date_of_birth).toLocaleDateString()
                          : "Not provided"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Sex</h3>
                      <p>
                        {userData.patient_profile.sex
                          ? userData.patient_profile.sex.charAt(0).toUpperCase() + userData.patient_profile.sex.slice(1)
                          : "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">National ID</h3>
                    <p>{userData.patient_profile.national_id || "Not provided"}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Name</h4>
                        <p>{userData.patient_profile.emergency_contact_name || "Not provided"}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                        <p>{userData.patient_profile.emergency_contact_phone || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      Health Conditions
                    </h3>
                    <p className="whitespace-pre-wrap">
                      {userData.patient_profile.health_conditions || "None specified"}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Pill className="h-4 w-4" />
                      Medications
                    </h3>
                    <p className="whitespace-pre-wrap">{userData.patient_profile.medications || "None specified"}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-24" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center">
            <Skeleton className="h-24 w-24 rounded-full mb-4" />
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-5 w-20 mb-6" />
            <div className="w-full space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-60" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
