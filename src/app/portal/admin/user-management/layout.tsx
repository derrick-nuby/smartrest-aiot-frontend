'use client';

import type React from "react";
import { Users, ServerCog, FileText, BarChart2, Activity, FileCog } from "lucide-react";
import PortalSideBar from "@/components/global/PortalSideBar";

export default function SettingssLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const NavItems = [
    {
      name: 'usersManagement',
      href: '/portal/admin/users',
      icon: Users,
      children: [
        {
          name: 'usersList',
          href: '/portal/admin/users',
          icon: Users,
        },
        {
          name: 'createUser',
          href: '/portal/admin/users',
          icon: FileText,
        },
        {
          name: 'editUser',
          href: '/portal/admin/users',
          icon: FileCog,
        },
      ]
    },
    {
      name: 'rolesManagement',
      href: '/portal/admin/roles',
      icon: FileCog,
      children: [
        {
          name: 'rolesList',
          href: '/portal/admin/roles',
          icon: FileCog,
        },
        {
          name: 'createRole',
          href: '/portal/admin/roles',
          icon: FileText,
        },
        {
          name: 'editRole',
          href: '/portal/admin/roles',
          icon: FileCog,
        },
      ]
    },
    {
      name: 'patientsManagement',
      href: '/portal/admin/patients',
      icon: Activity,
      children: [
        {
          name: 'patientsList',
          href: '/portal/admin/patients',
          icon: Activity,
        },
        {
          name: 'createPatient',
          href: '/portal/admin/patients',
          icon: FileText,
        },
        {
          name: 'editPatient',
          href: '/portal/admin/patients',
          icon: FileCog,
        },
      ]
    },
    {
      name: 'doctorsManagement',
      href: '/portal/admin/doctors',
      icon: ServerCog,
      children: [
        {
          name: 'doctorsList',
          href: '/portal/admin/doctors',
          icon: ServerCog,
        },
        {
          name: 'createDoctor',
          href: '/portal/admin/doctors',
          icon: FileText,
        },
        {
          name: 'editDoctor',
          href: '/portal/admin/doctors',
          icon: FileCog,
        },
      ]
    },
    {
      name: 'customersManagement',
      href: '/portal/admin/customers',
      icon: BarChart2,
      children: [
        {
          name: 'customersList',
          href: '/portal/admin/customers',
          icon: BarChart2,
        },
        {
          name: 'createCustomer',
          href: '/portal/admin/customers',
          icon: FileText,
        },
        {
          name: 'editCustomer',
          href: '/portal/admin/customers',
          icon: FileCog,
        },
      ]
    },
  ];

  return (
    <div className="flex">
      <PortalSideBar items={NavItems} />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}
