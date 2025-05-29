import { IconType } from 'react-icons';
import {
  IoHomeSharp,
  IoPeopleSharp,
  IoWalletSharp,
  IoCalendarSharp,
  IoSettingsSharp,
  IoPersonCircleSharp,
  IoMedkitSharp,
  IoAnalyticsSharp,
  IoBedSharp,
  IoNotificationsSharp,
  IoDocumentTextSharp,
  IoHeartSharp,
  IoPulseSharp,
  IoHardwareChipSharp,
  IoServerSharp
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
      description: 'Dashboard overview of SmartRest AIoT'
    },
    {
      name: 'health',
      location: '/health',
      access: ['all', 'patient', 'doctor', 'admin'],
      displayName: 'Health Monitoring',
      componentIcon: IoHeartSharp,
      description: 'Real-time health metrics and monitoring'
    },
    {
      name: 'sleep',
      location: '/sleep',
      access: ['all', 'patient', 'doctor', 'customer', 'admin'],
      displayName: 'Sleep Analysis',
      componentIcon: IoBedSharp,
      description: 'Sleep pattern analysis and insights'
    },
    {
      name: 'patients',
      location: '/patients',
      access: ['doctor', 'admin'],
      displayName: 'Patients',
      componentIcon: IoPeopleSharp,
      description: 'Manage patient profiles and health records'
    },
    {
      name: 'devices',
      location: '/devices',
      access: ['admin', 'customer'],
      displayName: 'Smart Mattress',
      componentIcon: IoHardwareChipSharp,
      description: 'Smart mattress configuration and management'
    },
    {
      name: 'temperature',
      location: '/temperature',
      access: ['all', 'patient', 'customer'],
      displayName: 'Temperature Control',
      componentIcon: IoPulseSharp,
      description: 'Mattress temperature settings and automation'
    },
    {
      name: 'analytics',
      location: '/analytics',
      access: ['admin', 'doctor'],
      displayName: 'Analytics',
      componentIcon: IoAnalyticsSharp,
      description: 'Health data analytics and insights'
    },
    {
      name: 'reports',
      location: '/reports',
      access: ['admin', 'doctor', 'patient'],
      displayName: 'Reports',
      componentIcon: IoDocumentTextSharp,
      description: 'Health reports and sleep pattern analysis'
    },
    {
      name: 'notifications',
      location: '/notifications',
      access: ['all'],
      displayName: 'Notifications',
      componentIcon: IoNotificationsSharp,
      description: 'System alerts and health notifications'
    },
    {
      name: 'payments',
      location: '/payments',
      access: ['admin', 'customer'],
      displayName: 'Payments',
      componentIcon: IoWalletSharp,
      description: 'Manage payments and subscriptions'
    },
    {
      name: 'appointments',
      location: '/appointments',
      access: ['doctor', 'patient', 'admin'],
      displayName: 'Appointments',
      componentIcon: IoCalendarSharp,
      description: 'Schedule and manage doctor appointments'
    }, {
      name: 'products',
      location: '/products',
      access: ['admin', 'customer'],
      displayName: 'Products',
      componentIcon: IoMedkitSharp,
      description: 'Browse and manage smart mattress products'
    },
    {
      name: 'messaging',
      location: '/messaging',
      access: ['all', 'patient', 'doctor', 'admin'],
      displayName: 'Messaging',
      componentIcon: IoNotificationsSharp,
      description: 'Internal messaging and communication system'
    },
    {
      name: 'sensors',
      location: '/sensors',
      access: ['admin', 'doctor', 'patient'],
      displayName: 'Sensors',
      componentIcon: IoHardwareChipSharp,
      description: 'IoT sensor data monitoring and analytics'
    },
    {
      name: 'users',
      location: '/users',
      access: ['admin'],
      displayName: 'Users',
      componentIcon: IoPersonCircleSharp,
      description: 'Manage system user accounts and roles'
    },
    {
      name: 'system',
      location: '/system',
      access: ['admin'],
      displayName: 'System',
      componentIcon: IoServerSharp,
      description: 'IoT system status and management'
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
