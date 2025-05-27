import UserProfileCard from '@/features/auth/components/UserProfileCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View and manage your user profile',
};

export default function Profile() {
  return <UserProfileCard />;
}
