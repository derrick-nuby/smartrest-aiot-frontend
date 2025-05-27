"use client";

import Link from "next/link";
import HeaderApps from "./HeaderApps";
import Image from "next/image";
import UserProfile from "./UserProfile";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white w-full">
      {/* Desktop and Tablet Header */}
      <div className="flex items-center justify-between px-4 md:px-10 min-h-14">
        <Link href={"/"} className="flex items-center gap-2 md:gap-5">
          <Image src={"/images/app-icon.png"} alt={"logo"} className="size-8 md:size-9" width={40} height={40} />
          <p className="text-sm md:text-base font-medium truncate max-w-[180px] md:max-w-none">
            Rwanda - Performance Based Financing
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <HeaderApps />
          <UserProfile />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col w-full border-t border-white/20 py-3 px-4 bg-primary absolute z-50">
          <div className="flex justify-end space-x-4 items-center">
            <HeaderApps />
            <UserProfile />
          </div>
        </div>
      )}
    </nav>
  );
}
