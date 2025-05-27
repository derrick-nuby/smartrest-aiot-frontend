"use client";
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useCurrentUser } from '../hooks/UseAuthHooks';

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles?: string[];
  redirectTo?: string;
}

export default function AuthGuard({
  children,
  allowedRoles = [],
  redirectTo = '/auth/login',
}: AuthGuardProps) {
  const router = useRouter();
  const { data: user, isLoading, isError } = useCurrentUser();

  useEffect(() => {
    // If we're not loading anymore and there's no user, redirect to login
    if (!isLoading && !user) {
      router.push(redirectTo);
    }

    // If we're not loading anymore and there is a user but they don't have the right role
    if (!isLoading && user && allowedRoles.length > 0) {
      if (!allowedRoles.includes(user.role)) {
        router.push('/unauthorized');
      }
    }
  }, [user, isLoading, router, redirectTo, allowedRoles]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  // Show error state
  if (isError) {
    router.push(redirectTo);
    return null;
  }

  // If there's a user and they have the right role, show the children
  if (user && (allowedRoles.length === 0 || allowedRoles.includes(user.role))) {
    return <>{children}</>;
  }

  // Default case, don't render anything while redirecting
  return null;
}
