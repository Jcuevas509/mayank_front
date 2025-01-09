"use client";

import Link from "next/link";
import { Home, Users, Building2, BookOpen, Plus, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../theme/theme-provider";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Home");
  const { theme } = useTheme();

  const menuItems = [
    { label: "TestPage", icon: User, isMain: true },
    { label: "Submit Lead", icon: Plus, isMain: true },
    { label: "Home", icon: Home, isMain: true },
    { label: "Setter", icon: null, isMain: false },
    { label: "Sales Rep", icon: null, isMain: false },
    { label: "Team", icon: Users, isMain: true },
    { label: "Office", icon: Building2, isMain: true },
    { label: "Company", icon: Building2, isMain: true },
    { label: "Resources", icon: BookOpen, isMain: true },
  ];

  return (
    <div className="flex flex-col w-[200px] h-screen  bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      {/* Logo section */}
      <div className="p-4 border-b border-r border-gray-200 dark:border-gray-800">
        <Image
          src={theme === "dark" ? "/common/logo1.svg" : "/common/logo2.svg"}
          alt="Suntapped Energy"
          width={150}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Sidebar content */}
      <div className="flex-1 overflow-y-auto border-r border-gray-200 dark:border-gray-800">
        <nav className="py-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              onClick={() => {
                setActiveItem(item.label);
                if (window.innerWidth < 1024) onClose?.();
              }}
              className={`
                flex items-center gap-3 px-4 py-2 text-sm
                transition-colors duration-200
                ${!item.isMain ? "pl-8" : ""} 
                ${
                  activeItem === item.label
                    ? "text-custom-blue bg-gray-100 dark:bg-gray-900"
                    : "text-gray-700 dark:text-gray-300 hover:text-custom-blue hover:bg-gray-100 dark:hover:bg-gray-900"
                }
              `}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              {item.label}
              {(item.label === "Sales Rep" ||
                item.label === "Office" ||
                item.label === "Company" ||
                item.label === "Resources") && (
                <span className="ml-auto">›</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
