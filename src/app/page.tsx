import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="max-w-[680px] mx-auto px-[18px] py-7 pb-12">
      <div className="relative w-full aspect-[1024/255] rounded-lg overflow-hidden mb-8 bg-gray-100">
        <Image
          src="/images/banner-ai-analyst.png"
          alt="Santi Weight presenting the AI Analyst architecture on stage at Bridgewater"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Header variant="home" />

      {/* About Section */}
      <section className="mt-8">
        <div className="space-y-3 text-gray-700">
          <p>
            I build no-code development tools for everyone: investors, poker
            players, networking engineers.
          </p>
          <p>
            My specialty is going 0&nbsp;
            <span className="text-gray-400 font-mono">&rarr;</span>
            &nbsp;1: finding problems people didn&apos;t know they had, then
            fixing them.
          </p>

          <h2 className="text-lg font-semibold pt-2">Active</h2>

          <div className="pt-2">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold text-gray-900">
                AI Analyst, Bridgewater Associates
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                June 2025 &ndash; Active
              </span>
            </div>
            <p className="mt-1">
              I went 0&nbsp;
              <span className="text-gray-400 font-mono">&rarr;</span>
              &nbsp;1 with the <strong>AI Analyst</strong> from idea inception
              to leading our team to a company-wide release.
            </p>
            <p className="mt-1">
              AI Analyst enables Bridgewater investors to take any natural
              language idea and convert it into a tradeable investment
              strategy.
            </p>
            <p className="mt-1">
              <Link
                href="https://youtu.be/lXZb21CfeIY?t=1007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-black hover:underline"
              >
                Watch me talk about the AI Analyst at LangChain 2026 &rarr;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FF0000"
                  className="w-5 h-5 flex-shrink-0"
                  aria-label="YouTube"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </p>
            <p className="mt-1">
              The AI Analyst agent has become the core technology behind
              various strategic projects across the firm.
            </p>
          </div>

          <div className="pt-2">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold text-gray-900">
                Productor, Personal Project
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                Active
              </span>
            </div>
            <p className="mt-1">
              I have been building a new stack of IDE, Coding Agent, and
              Programming Language.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
