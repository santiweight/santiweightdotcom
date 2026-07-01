import Link from "next/link";
import ContactEmail from "@/components/ContactEmail";

interface HeaderProps {
  variant?: "home" | "page";
}

export default function Header({ variant = "home" }: HeaderProps) {
  const isHome = variant === "home";

  return (
    <header className={`flex items-start gap-4 ${isHome ? "mb-8" : "mb-6"}`}>
      <div className="flex-1 min-w-0">
        <h1
          className={`font-bold ${isHome ? "text-[28px]" : "text-xl"} mb-0.5`}
        >
          <Link href="/" className="hover:underline">
            Santi Weight
          </Link>
        </h1>
        <p className="text-gray-600 mb-2">Product Builder</p>
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
          <ContactEmail />
        </div>
      </div>
    </header>
  );
}
