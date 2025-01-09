"use client";

import { useState } from "react";
import { Sidebar, MainContent, Header, RightPanel } from "@/components";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Sidebar */}
      <div
        className={`
          fixed sidebar:relative
          sidebar:left-0 right-0 sidebar:right-auto
          top-0 h-full z-50
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "translate-x-full sidebar:translate-x-0"
          }
        `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex flex-1 h-[calc(100vh-64px)]">
          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 sidebar:hidden z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <div className="flex-1 overflow-auto">
            <div className="flex flex-col min-h-full">
              <div className="flex-1">
                <MainContent />
              </div>
              <div className="lg:hidden ">
                <RightPanel />
              </div>
            </div>
          </div>

          <div className="hidden sidebar:block w-[400px] overflow-auto">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
