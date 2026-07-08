import React from "react";
import Header from "@/components/Header";

export interface RootLayoutShellProps {
  children?: React.ReactNode;
  /** CSS class names applied to the outer wrapper (replaces body-level font vars) */
  className?: string;
}

/** Presentational shell — header + main content area, no html/body tags. */
export default function RootLayoutShell({
  children,
  className = "",
}: RootLayoutShellProps) {
  return (
    <div className={className}>
      <div className="max-w-[900px] mx-auto px-[18px] py-7 pb-12">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
