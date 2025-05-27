import ResetPasswordForm from '@/features/auth/components/ResetPasswordForm';
import { Suspense } from 'react';

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
