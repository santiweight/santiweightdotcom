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
      <div className="max-w-[1000px] mx-auto px-[18px] py-7 pb-12">
        <Header />
        <div className="flex gap-8">
          <Sidebar />
          <main className="min-w-0 flex-1 border-l border-gray-200 pl-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
