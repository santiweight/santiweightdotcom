"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/past-work", label: "Past Work" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex md:flex-col gap-4 md:gap-1 flex-shrink-0 w-full md:w-40 border-b md:border-b-0 md:border-r border-gray-200 px-[18px] py-4 md:py-7">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors ${
              isActive
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
