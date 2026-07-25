"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume", newTab: "/resume.pdf" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:block w-[140px] flex-shrink-0 pt-1 pl-2">
      <ul className="space-y-1">
        {items.map(({ label, href, newTab }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <div className="flex items-center">
                <Link
                  href={href}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
                {newTab && (
                  <a
                    href={newTab}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in new tab"
                    className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
