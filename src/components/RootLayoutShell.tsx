import React from "react";
import Sidebar from "@/components/Sidebar";

export interface RootLayoutShellProps {
  children?: React.ReactNode;
  /** CSS class names applied to the outer wrapper (replaces body-level font vars) */
  className?: string;
}

/** Presentational shell — sidebar + main content area, no html/body tags. */
export default function RootLayoutShell({
  children,
  className = "",
}: RootLayoutShellProps) {
  return (
    <div className={`flex flex-col md:flex-row md:min-h-screen ${className}`.trim()}>
      <Sidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
