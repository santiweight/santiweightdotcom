"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:block w-[140px] flex-shrink-0 pt-1 pl-2">
      <ul className="space-y-1">
        {items.map(({ label, href, external }) => {
          const active = !external && pathname === href;
          return (
            <li key={href}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
