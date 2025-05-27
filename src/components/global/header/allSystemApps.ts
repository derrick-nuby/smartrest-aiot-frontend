import { IconType } from 'react-icons';
import {
  MdHome,
  MdPostAdd,
  MdShowChart,
  MdRemoveRedEye,
  MdFileDownload,
  MdBarChart,
  MdAttachMoney,
  MdAccountBalance,
  MdGroups,
  MdScore,
  MdPublic,
  MdManageAccounts,
  MdSettings
} from 'react-icons/md';

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
      componentIcon: MdHome,
      description: 'Dashboard overview of PBF metrics'
    },
    {
      name: 'data-entry',
      location: '/data-entry',
      access: ['all'],
      displayName: 'Data Entry',
      componentIcon: MdPostAdd,
      description: 'Enter PBF quantities and validations'
    },
    {
      name: 'quality-score-entry',
      location: '/quality-entry',
      access: ['all'],
      displayName: 'Quality Scores',
      componentIcon: MdShowChart,
      description: 'Enter and compute facility quality scores'
    },
    {
      name: 'preview-payments',
      location: '/preview',
      access: ['all'],
      displayName: 'Preview Payments',
      componentIcon: MdRemoveRedEye,
      description: 'View computed payments and apply adjustments'
    },
    {
      name: 'export-payments',
      location: '/export',
      access: ['all'],
      displayName: 'Export Payments',
      componentIcon: MdFileDownload,
      description: 'Generate CSV/JSON/XML files for bank processing'
    },
    {
      name: 'reports',
      location: '/reports',
      access: ['all'],
      displayName: 'Reports',
      componentIcon: MdBarChart,
      description: 'Interactive dashboards and visualizations'
    },
    {
      name: 'tariff-management',
      location: '/tariffs',
      access: ['admin'],
      displayName: 'Tariffs & Targets',
      componentIcon: MdAttachMoney,
      description: 'Configure PBF indicator tariffs and targets'
    },
    {
      name: 'bank-management',
      location: '/banks',
      access: ['admin'],
      displayName: 'Bank Details',
      componentIcon: MdAccountBalance,
      description: 'Configure facility bank account information'
    },
    {
      name: 'partner-management',
      location: '/partners',
      access: ['admin'],
      displayName: 'Partners',
      componentIcon: MdGroups,
      description: 'Assign funders to indicators and datasets'
    },
    {
      name: 'quality-max-score',
      location: '/quality-max-score',
      access: ['admin'],
      displayName: 'Quality Max Score',
      componentIcon: MdScore,
      description: 'Define maximum scores for quality indicators'
    },
    {
      name: 'public-portal',
      location: '/public',
      access: ['public'],
      displayName: 'Public Portal',
      componentIcon: MdPublic,
      description: 'Read-only PBF performance summaries'
    },
    {
      name: 'user-management',
      location: '/users',
      access: ['admin'],
      displayName: 'Users',
      componentIcon: MdManageAccounts,
      description: 'Manage system users, roles & permissions'
    },
    {
      name: 'settings',
      location: '/settings',
      access: ['admin'],
      displayName: 'Settings',
      componentIcon: MdSettings,
      description: 'System configuration and integrations'
    }
  ]
};
