"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactEmail from "@/components/ContactEmail";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/past-work", label: "Past Work" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex md:flex-col gap-4 flex-shrink-0 w-full md:w-40 border-b md:border-b-0 md:border-r border-gray-200 px-[18px] py-4 md:py-7">
      <Image
        src="/images/profile-photo.png"
        alt="Santi Weight"
        width={96}
        height={96}
        className="hidden md:block self-center rounded-full object-cover w-24 h-24 bg-gray-200"
        priority
      />
      <h1 className="font-bold text-[22px] md:text-center">
        <Link href="/" className="hover:underline">
          Santi Weight
        </Link>
      </h1>
      <div className="flex items-center gap-3">
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="text-gray-500 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
          </svg>
        </a>
        <ContactEmail />
        <a
          href="https://x.com/WeightSant59561"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
          className="text-gray-500 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      <div className="flex md:flex-col gap-4 md:gap-1">
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
      </div>
    </nav>
  );
}
