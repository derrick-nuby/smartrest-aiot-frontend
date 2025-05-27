"use client";
import { Loader2 } from 'lucide-react';
import { useCurrentUser } from '../hooks/UseAuthHooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function UserProfileCard() {
  const { data: user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-4 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-center">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-red-500">
            {error instanceof Error ? error.message : 'Failed to load profile'}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/auth/login">Go to Login</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
        <CardDescription>
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">First Name</p>
            <p>{user.first_name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Last Name</p>
            <p>{user.last_name}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Email</p>
          <p className="flex items-center">
            {user.email}
            {user.email_verified_at ? (
              <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Verified
              </span>
            ) : (
              <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                Unverified
              </span>
            )}
          </p>
        </div>
        {user.phone && (
          <div>
            <p className="text-sm font-medium text-muted-foreground">Phone</p>
            <p>{user.phone}</p>
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-muted-foreground">Member Since</p>
          <p>{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button asChild variant="outline" className="w-full">
          <Link href="/auth/change-password">
            Change Password
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
