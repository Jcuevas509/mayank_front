"use client";
import { Menu, Bell, ChevronDown } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";
import Image from "next/image";

interface HeaderProps {
  onSidebarToggle: () => void;
}

export function Header({ onSidebarToggle }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-black px-4 py-2 relative">
      <div className="flex items-center justify-between">
        {/* Mobile view - Company name */}
        <div className="sidebar:hidden">
          <span className="font-semibold text-lg">SUNTAPPED ENERGY</span>
        </div>

        {/* Right section - Always right aligned */}
        <div className="hidden sm:flex items-center gap-6 ml-auto">
          <ThemeToggle />
          <button className="bg-custom-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
            Create
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-custom-blue rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <Image
                src="/common/Profile.svg"
                width={29}
                height={29}
                alt="profile image"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={onSidebarToggle}
          className="sidebar:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
