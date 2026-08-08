import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function HomeView() {
  return (
    <section>
      <div className="space-y-3 text-gray-700">
        <p>
          I&apos;m a 0&nbsp;
          <span className="text-gray-400 font-mono">&rarr;</span>
          &nbsp;1 startup guy. I&apos;m good in ambiguity and greenfield.
        </p>
        <p>
          Recently built Bridgewater Associates&apos; (world&apos;s largest
          hedge fund) AI Analyst, and spoke on it.
        </p>
        <p>
          Currently thinking about teen suicide and the men&apos;s loneliness
          epidemic. I was a deeply depressed teen, and I want to help boys who
          are suffering like I did.
        </p>
        <hr className="border-gray-200" />
        <p>
          Book a time with me! I&apos;m not shy and love meeting people :)
        </p>
        <p className="pl-4">
          <em>
            <a
              href="https://calendly.com/santiago-weight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open calendar
            </a>
          </em>
        </p>
        <p className="pl-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          <em>Contact me on socials</em> &rarr;
          <span className="inline-flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/santi-weight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-[#0A66C2] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
            </a>
            <a
              href="https://x.com/WeightSant59561"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
              className="text-black hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/santiweight/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="text-[#E4405F] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="mailto:santiago.weight@gmail.com"
              aria-label="Email santiago.weight@gmail.com"
              title="santiago.weight@gmail.com"
              className="text-[#EA4335] hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </span>
        </p>

        <div className="mt-12 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">
            Harbor Mentors, Personal &mdash;{" "}
            <a
              href="https://harbormentors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-normal"
            >
              harbormentors.com
            </a>
          </h3>
          <div className="mt-2 space-y-2">
            <p>
              When I was depressed as a teen, there were professionals, but{" "}
              <em>no one who understood me</em>. I&apos;m building a network of
              mentors who understand those problems but have come out the other
              side like me.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-2/3">
              <h3 className="font-semibold text-gray-900">
                AI Analyst, Bridgewater Associates
              </h3>
              <div className="mt-2 space-y-2">
                <p>
                  Michael Ran and I built the <strong>AI Analyst</strong> from
                  0&nbsp;
                  <span className="text-gray-400 font-mono">&rarr;</span>
                  &nbsp;1 for Bridgewater Associates, the world&apos;s largest
                  hedge fund.
                </p>
                <p>
                  The agent we developed is now the core engine for
                  Bridgewater&apos;s AI trading stack.
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

        {/* <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">
            Productor, Personal Project
          </h3>
          ...
        </div> */}
      </div>
    </section>
  );
}
