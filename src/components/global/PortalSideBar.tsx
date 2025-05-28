"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Folder, Menu, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the types for our navigation items
export type NavItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
};

export type SideBarProps = {
  items: NavItem[];
  className?: string;
};

export default function PortalSideBar({ items, className }: SideBarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={cn("relative h-[calc(100vh-64px)]", className)}>
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary-300 text-secondary-1000 hover:bg-gray-300"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Menu className="h-3 w-3" />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "h-full overflow-y-auto border-r bg-background transition-all duration-300 ease-in-out",
          collapsed ? "w-[60px]" : "w-[240px]",
        )}
      >
        <div className="flex flex-col py-4">
          {items.map((item, index) => (
            <div key={index} className="px-2 py-1">
              {item.children ? (
                <NavGroupWithChildren item={item} pathname={pathname} collapsed={collapsed} />
              ) : (
                <NavSingleItem item={item} pathname={pathname} collapsed={collapsed} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavSingleItem({
  item,
  pathname,
  collapsed,
}: {
  item: NavItem;
  pathname: string;
  collapsed: boolean;
}) {
  const isActive = pathname === item.href;
  const Icon = item.icon || Folder;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center px-3 py-3 transition-colors",
        isActive ? "bg-gray-100 font-xl text-gray-900" : "text-gray-600 hover:bg-primary hover:text-primary-foreground",
        collapsed && "justify-center px-2",
      )}
      title={collapsed ? item.name : undefined}
    >
      <Icon className={cn("size-5 shrink-0", !collapsed && "mr-2")} />
      {!collapsed && <span className="truncate">{item.name}</span>}
    </Link>
  );
}

function NavGroupWithChildren({
  item,
  pathname,
  collapsed,
}: {
  item: NavItem;
  pathname: string;
  collapsed: boolean;
}) {
  const [open, setOpen] = React.useState(item.children?.some((child) => pathname === child.href) || false);
  const Icon = item.icon || Folder;
  const hasActiveChild = item.children?.some(
    (child) => pathname === child.href || child.children?.some((subChild) => pathname === subChild.href),
  );

  // If sidebar is collapsed, clicking on parent item should navigate to its href
  const handleParentClick = (e: React.MouseEvent) => {
    if (collapsed) {
      // Don't prevent default, allow navigation
    } else {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div>
      <Link
        href={item.href}
        className={cn(
          "flex items-center px-3 py-3 text-sm transition-colors",
          hasActiveChild || pathname === item.href
            ? "bg-gray-100 font-xl text-gray-900"
            : "text-gray-600 hover:bg-primary hover:text-primary-foreground",
          collapsed && "justify-center px-2",
        )}
        onClick={handleParentClick}
        title={collapsed ? item.name : undefined}
      >
        <Icon className={cn("size-5 shrink-0", !collapsed && "mr-2")} />
        {!collapsed && (
          <>
            <span className="flex-1 truncate text-base">{item.name}</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
          </>
        )}
      </Link>

      {!collapsed && open && item.children && (
        <div className="mt-1 ml-4 pl-2 border-l border-gray-200">
          {item.children.map((child, childIndex) => {
            const isActive = pathname === child.href;
            const ChildIcon = child.icon || Folder;

            return (
              <div key={childIndex} className="py-1">
                <Link
                  href={child.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-gray-100 font-xl text-gray-900"
                      : "text-gray-600 hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  <ChildIcon className="size-4 mr-2 shrink-0" />
                  <span className="truncate">{child.name}</span>
                </Link>

                {child.children && isActive && (
                  <div className="mt-1 ml-4 pl-2 border-l border-gray-200">
                    {child.children.map((subChild, subChildIndex) => {
                      const isSubActive = pathname === subChild.href;

                      return (
                        <Link
                          key={subChildIndex}
                          href={subChild.href}
                          className={cn(
                            "flex items-center px-3 py-2 text-sm transition-colors",
                            isSubActive
                              ? "bg-gray-100 font-xl text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          )}
                        >
                          <span className="truncate">{subChild.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
