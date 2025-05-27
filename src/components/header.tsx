'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/features/auth/hooks/UseAuthHooks';
import { User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const { data: user } = useCurrentUser();
  const pathname = usePathname();

  // Role-specific dashboard routes
  const ROLE_ROUTES = {
    'patient': '/patient/dashboard',
    'customer': '/customer/dashboard',
    'admin': '/admin/dashboard',
    'doctor': '/doctor/dashboard',
  };

  // Get dashboard link based on user role
  const getDashboardLink = () => {
    if (!user) return '/';
    return ROLE_ROUTES[user.role as keyof typeof ROLE_ROUTES] || '/';
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto mr-2" />
          <span className="font-semibold text-xl">SmartRest</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2 py-1 rounded-md ${pathname === item.href
                    ? 'font-medium text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth buttons or user dropdown */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {user.first_name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getDashboardLink()}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/change-password">Change Password</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost">
                <Link href="/auth/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Link href="/" className="flex items-center mb-6">
              <Logo className="h-6 w-auto mr-2" />
              <span className="font-semibold">SmartRest</span>
            </Link>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-1 ${pathname === item.href
                    ? 'font-medium text-primary'
                    : 'text-muted-foreground'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {user ? (
                <>
                  <Link href={getDashboardLink()} className="px-2 py-1">
                    Dashboard
                  </Link>
                  <Link href="/auth/profile" className="px-2 py-1">
                    Profile
                  </Link>
                  <Link href="/auth/logout" className="px-2 py-1">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="px-2 py-1">
                    Log In
                  </Link>
                  <Link href="/auth/register" className="px-2 py-1">
                    Register
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
