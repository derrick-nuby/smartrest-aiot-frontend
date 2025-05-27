import { IconType } from 'react-icons';
import {
  IoHomeSharp,
  IoPeopleSharp,
  IoWalletSharp,
  IoCalendarSharp,
  IoSettingsSharp,
  IoPersonCircleSharp,
  IoMedkitSharp,
  IoRestaurantSharp,
  IoAnalyticsSharp,
  IoClipboardSharp,
  IoFastFoodSharp,
  IoStatsChartSharp
} from 'react-icons/io5';

export interface SystemApps {
  name: string;
  location: string;
  access: string[];
  displayName: string;
  componentIcon: IconType;
  description: string;
}

export interface Apps {
  modules: SystemApps[];
}

export const appModules: Apps = {
  modules: [
    {
      name: 'home',
      location: '/',
      access: ['all'],
      displayName: 'Home',
      componentIcon: IoHomeSharp,
      description: 'Dashboard overview of SmartRest'
    },
    {
      name: 'orders',
      location: '/orders',
      access: ['all'],
      displayName: 'Orders',
      componentIcon: IoClipboardSharp,
      description: 'Manage customer orders and order history'
    },
    {
      name: 'menu',
      location: '/menu',
      access: ['admin', 'finance', 'dataentry'],
      displayName: 'Menu Management',
      componentIcon: IoFastFoodSharp,
      description: 'Configure menu items, categories, and pricing'
    },
    {
      name: 'tables',
      location: '/tables',
      access: ['admin', 'dataentry'],
      displayName: 'Table Management',
      componentIcon: IoRestaurantSharp,
      description: 'Manage restaurant tables and seating'
    },
    {
      name: 'reservations',
      location: '/reservations',
      access: ['admin', 'dataentry'],
      displayName: 'Reservations',
      componentIcon: IoCalendarSharp,
      description: 'Manage customer reservations and bookings'
    },
    {
      name: 'analytics',
      location: '/analytics',
      access: ['admin', 'finance'],
      displayName: 'Analytics',
      componentIcon: IoStatsChartSharp,
      description: 'Business intelligence and performance metrics'
    },
    {
      name: 'payments',
      location: '/payments',
      access: ['admin', 'finance'],
      displayName: 'Payments',
      componentIcon: IoWalletSharp,
      description: 'Process payments and manage transactions'
    },
    {
      name: 'inventory',
      location: '/inventory',
      access: ['admin', 'finance'],
      displayName: 'Inventory',
      componentIcon: IoMedkitSharp,
      description: 'Track ingredients and manage stock levels'
    },
    {
      name: 'customers',
      location: '/customers',
      access: ['admin', 'dataentry'],
      displayName: 'Customers',
      componentIcon: IoPersonCircleSharp,
      description: 'Manage customer data and loyalty programs'
    },
    {
      name: 'reports',
      location: '/reports',
      access: ['admin', 'finance', 'reports', 'viewer'],
      displayName: 'Reports',
      componentIcon: IoAnalyticsSharp,
      description: 'Generate and view business reports'
    },
    {
      name: 'staff',
      location: '/staff',
      access: ['admin'],
      displayName: 'Staff Management',
      componentIcon: IoPeopleSharp,
      description: 'Manage staff accounts and permissions'
    },
    {
      name: 'users',
      location: '/users',
      access: ['admin'],
      displayName: 'Users',
      componentIcon: IoPeopleSharp,
      description: 'Manage system user accounts and roles'
    },
    {
      name: 'settings',
      location: '/settings',
      access: ['admin'],
      displayName: 'Settings',
      componentIcon: IoSettingsSharp,
      description: 'System configuration and preferences'
    }
  ]
};
