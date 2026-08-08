import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export interface RootLayoutShellProps {
  children?: React.ReactNode;
  className?: string;
}

export default function RootLayoutShell({
  children,
  className = "",
}: RootLayoutShellProps) {
  return (
    <div className={className}>
      <div className="max-w-[1000px] mx-auto px-[18px] sm:pl-2 py-7 pb-12 h-dvh flex flex-col sm:flex-row sm:gap-8">
        <div className="hidden sm:flex flex-col w-[220px] flex-shrink-0">
          <Header />
          <Sidebar />
        </div>
        <div className="sm:hidden mb-6">
          <Header />
        </div>
        <main className="min-w-0 flex-1 sm:border-l sm:border-gray-200 sm:pl-8 sm:pt-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
