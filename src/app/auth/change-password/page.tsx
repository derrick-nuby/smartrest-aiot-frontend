import ChangePasswordForm from '@/features/auth/components/ChangePasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Password',
  description: 'Change your account password',
};

export default function ChangePassword() {
  return <ChangePasswordForm />;
}
