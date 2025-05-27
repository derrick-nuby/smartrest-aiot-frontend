"use client";

import { useState } from "react";
import type React from "react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IoAppsSharp } from "react-icons/io5";
import { appModules, type SystemApps } from "./allSystemApps";
import { useCurrentUser } from "@/features/auth/hooks/UseAuthHooks";

function escapeRegExpCharacters(text: string): string {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function HeaderApps() {
    const [filter, setFilter] = useState("");
    const { data: currentUser } = useCurrentUser();
    const userRole = currentUser?.role ? [currentUser.role] : ["admin"];

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const filteredModules =
        appModules?.modules?.filter((module: SystemApps) => {
            const hasAccess = userRole.some((role) => module.access.includes(role)) || module.access.includes("all");

            const appName = module.displayName || module.name;
            const formattedAppName = appName.toLowerCase();
            const formattedFilter = escapeRegExpCharacters(filter).toLowerCase();
            const matchesFilter = filter.length > 0 ? formattedAppName.includes(formattedFilter) : true;

            return hasAccess && matchesFilter;
        }) || [];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="group p-[6px] cursor-pointer hover:bg-background">
                    <IoAppsSharp size={22} className="group-hover:text-primary" />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="bg-background text-foreground shadow-lg rounded-[3px] z-50 p-0"
                align="end"
                sideOffset={8}
            >
                <div className="w-[90vw] sm:w-[70vw] md:w-[30vw] min-w-[280px] max-w-[560px]">
                    <div className="flex gap-2 items-center p-4">
                        <Input
                            type="text"
                            value={filter}
                            onChange={handleFilterChange}
                            placeholder="Search apps..."
                            className="border rounded-[3px] w-full p-2 text-xs"
                        />
                    </div>

                    <ScrollArea className="h-[50vh] md:h-[465px]">
                        <div className="m-2 flex flex-wrap justify-between">
                            {filteredModules.length > 0 ? (
                                filteredModules.map((module: SystemApps) => {
                                    const IconComponent = module.componentIcon;

                                    return (
                                        <Link
                                            href={`/portal${module.location}`}
                                            key={module.name}
                                            className="group flex flex-col text-center gap-2 items-center text-xs border border-transparent rounded-[3px] w-[calc(33.33%-16px)] sm:w-24 hover:bg-primary py-3 m-2"
                                        >
                                            {IconComponent && (
                                                <IconComponent size={38} className="text-primary group-hover:text-background" />
                                            )}
                                            <p className="mt-3 text-base-1000 group-hover:text-background line-clamp-2">
                                                {module.displayName}
                                            </p>
                                        </Link>
                                    );
                                })
                            ) : (
                                <p className="p-4 text-center w-full">No apps found.</p>
                            )}
                        </div>
                    </ScrollArea>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
