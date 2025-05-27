'use client';

import { useEffect } from 'react';
import { useLogout } from '@/features/auth/hooks/UseAuthHooks';
import { Loader2 } from 'lucide-react';

export default function Logout() {
  const logoutMutation = useLogout();

  useEffect(() => {
    // Automatically trigger logout when this page is loaded
    logoutMutation.mutate();
  }, [logoutMutation]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-semibold">Logging out...</h1>
        <p className="text-muted-foreground mt-2">Please wait while we log you out securely.</p>
      </div>
    </div>
  );
}
