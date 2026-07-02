import Link from "next/link";
import Header from "@/components/Header";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  return (
    <div className="max-w-[900px] mx-auto px-[18px] py-7 pb-12">
      <Header variant="home" />

      {/* About Section */}
      <section className="mt-8">
        <div className="space-y-3 text-gray-700">
          <p>
            I build intuitive no-code development tools for any niche.
            Investors, Poker Players, Networking Engineers.
          </p>
          <p>
            I&apos;m at my best going 0&nbsp;
            <span className="text-gray-400 font-mono">&rarr;</span>
            &nbsp;1: noticing unsolved problems... then fixing them!
          </p>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-2/3">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-semibold text-gray-900">
                    AI Analyst, Bridgewater Associates
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Active
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p>
                    I started and led the <strong>AI Analyst</strong> project
                    and team from 0&nbsp;
                    <span className="text-gray-400 font-mono">&rarr;</span>
                    &nbsp;1 &ndash; a tool that builds tradeable strategies
                    from natural language.
                  </p>
                  <p>
                    The agent we developed for the AI Analyst is now a
                    strategic technology for Bridgewater&apos;s AI
                    positioning.
                  </p>
                  <p>
                    You can watch us present our work at LangChain Interrupt
                    2026 &rarr;
                  </p>
                </div>
              </div>
              <div className="sm:w-1/3 flex-shrink-0 flex items-center justify-center">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                  <YouTubeEmbed
                    videoId="lXZb21CfeIY"
                    start={1007}
                    title="AI Analyst at LangChain Interrupt 2026"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-baseline gap-2">
              <h3 className="font-semibold text-gray-900">
                Productor, Personal Project
              </h3>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Active
              </span>
            </div>
            <p className="mt-1">
              Modern IDEs (Cursor) and agents (Claude, Codex) are built on
              top of arcane languages that were designed for humans in the
              80s.
            </p>
            <p className="mt-1">
              I am building a completely new IDE-Agent-Language stack,
              underpinned by an AI-native Programming Language.
            </p>
            <p className="mt-1">
              Read my manifesto &rarr;{" "}
              <Link
                href="/articles/product-engineering-ide"
                className="text-blue-600 hover:underline"
              >
                A New Wave of IDEs + Coding Languages is Imminent
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
