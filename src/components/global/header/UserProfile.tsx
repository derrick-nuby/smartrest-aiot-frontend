"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Settings, HelpCircle, Users, Info, LogOut, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function UserProfile() {
    const { setTheme, theme } = useTheme();
    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "john doe",
        role: "admin",
    };

    const initials = `${user.firstName?.charAt(0).toUpperCase() || "U"}${user.lastName?.charAt(0).toUpperCase() || ""}`;

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        localStorage.removeItem("userRole");

        // Clear cookies
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict";
        document.cookie = "userData=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict";
        document.cookie = "userRole=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict";

        // Redirect to login page
        window.location.href = "/auth/login";
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="p-[6px] cursor-pointer">
                    <Avatar className="h-[36px] w-[36px] bg-primary hover:bg-background">
                        <AvatarFallback className="text-primary font-black">{initials}</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-[90vw] sm:w-80 bg-background text-muted-foreground shadow-md"
                align="end"
                sideOffset={8}
            >
                <div className="flex gap-4 pl-6 py-5 border-b">
                    <Avatar className="h-12 w-12">
                        <AvatarFallback className="text-xl font-bold text-background bg-primary">{initials}</AvatarFallback>
                    </Avatar>

                    <div>                        <p className="text-base">{user.firstName || "User Name"}</p>
                        <p className="text-sm">{user.email || "user@example.com"}</p>
                        <Link className="cursor-pointer text-xs underline" href={`/portal/profile`}>
                            Edit Profile
                        </Link>
                    </div>
                </div>

                <DropdownMenuGroup>

                    {/* Theme Toggle */}
                    <DropdownMenuItem
                        className="px-0 py-0 focus:bg-primary rounded-none group"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <div className="cursor-pointer flex gap-3 px-5 py-3 w-full">
                            <Sun className="text-primary group-hover:text-white dark:hidden" size={24} />
                            <Moon className="hidden text-primary group-hover:text-white dark:block" size={24} />
                            <span className="group-hover:text-white">
                                Change Theme to {theme === "light" ? "Dark" : "Light"} Mode
                            </span>
                        </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-0 py-0 focus:bg-primary rounded-none group">
                        <Link
                            className="cursor-pointer flex gap-3 px-5 py-3 w-full"
                            href={`/portal/settings`}
                        >
                            <Settings size={24} className="text-primary group-hover:text-white" />
                            <span className="group-hover:text-white">Settings</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-0 py-0 focus:bg-primary rounded-none group">
                        <Link
                            className="cursor-pointer flex gap-3 px-5 py-3 w-full"
                            href={`/portal/profile`}
                        >
                            <Users size={24} className="text-primary group-hover:text-white" />
                            <span className="group-hover:text-white">Account</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-0 py-0 focus:bg-primary rounded-none group">
                        <Link className="cursor-pointer flex gap-3 px-5 py-3 w-full" href="/help">
                            <HelpCircle size={24} className="text-primary group-hover:text-white" />
                            <span className="group-hover:text-white">Help</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-0 py-0 focus:bg-primary rounded-none group">
                        <Link className="cursor-pointer flex gap-3 px-5 py-3 w-full" href="/about">
                            <Info size={24} className="text-primary group-hover:text-white" />
                            <span className="group-hover:text-white">About</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="px-0 py-0 focus:bg-primary rounded-none group">
                        <Link
                            className="cursor-pointer flex gap-3 px-5 py-3 w-full"
                            href="/"
                            onClick={handleLogout}
                        >
                            <LogOut size={24} className="text-primary group-hover:text-white" />
                            <span className="group-hover:text-white">Logout</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <div className="p-4 text-xs text-muted-foreground">
                    <p className="mb-1">Version: 1.0.0</p>
                    <p className="mb-1">Developed By: SmartREST Team</p>
                    <p className="mb-1">Status: Active</p>
                    <p className="mb-1">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
