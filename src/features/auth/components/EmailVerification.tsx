"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

// UI Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

// Auth hooks
import { useVerifyEmail } from '../hooks/UseAuthHooks';

export default function EmailVerification() {
  const params = useParams();
  const id = params?.id as string;
  const hash = params?.hash as string;

  const verifyEmailMutation = useVerifyEmail();

  useEffect(() => {
    if (id && hash) {
      verifyEmailMutation.mutate({ id, hash });
    }
  }, [id, hash, verifyEmailMutation]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Email Verification</CardTitle>
            <CardDescription className="text-center">
              Verifying your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-6 pb-8">
            {verifyEmailMutation.isPending && (
              <>
                <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                <p className="text-center text-lg">Verifying your email address...</p>
              </>
            )}

            {verifyEmailMutation.isSuccess && (
              <>
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <p className="text-center text-lg">Your email has been successfully verified!</p>
              </>
            )}

            {verifyEmailMutation.isError && (
              <>
                <XCircle className="h-16 w-16 text-red-500 mb-4" />
                <p className="text-center text-lg">
                  {verifyEmailMutation.error instanceof Error
                    ? verifyEmailMutation.error.message
                    : 'There was a problem verifying your email address.'}
                </p>
              </>
            )}
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button asChild className="w-full">
                <Link href="/auth/login">
                  {verifyEmailMutation.isSuccess ? 'Proceed to Login' : 'Back to Login'}
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
