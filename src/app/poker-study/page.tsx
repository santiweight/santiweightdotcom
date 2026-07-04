import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Poker Research Study (Paid)",
  description:
    "Paid poker research study — share your own exported hand histories. Anonymous, aggregate analysis only.",
};

export default function PokerStudyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-[18px] py-7 pb-12">
      <Header variant="page" />

      <h2 className="text-[24px] font-bold mb-2.5">
        Poker Research Study (Paid)
      </h2>

      <p className="my-2.5">
        I&apos;m running a small independent research project on poker
        decision-making.
      </p>

      <p className="my-2.5">
        I&apos;m looking for players willing to share{" "}
        <strong>their own exported hand histories</strong> from sites they
        already play on. Data is <strong>anonymized</strong> and analyzed{" "}
        <strong>only in aggregate</strong>.
      </p>

      <a
        className="inline-block px-3.5 py-2.5 rounded-lg bg-black text-white font-semibold mt-3 hover:opacity-90 transition-opacity"
        href="https://docs.google.com/forms/d/e/1FAIpQLScMRZUSohAKfHBzHFQ8--vs48q-9cucxN9VgCjeRcJZFWLj7Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply (2 minutes)
      </a>

      <div className="border border-gray-200 rounded-xl p-3.5 mt-3.5 bg-gray-50">
        <strong>How it works</strong>
        <ul className="mt-2.5 pl-[18px] list-disc">
          <li className="my-1.5">You apply via the form.</li>
          <li className="my-1.5">
            If selected, you share an export of your hand histories.
          </li>
          <li className="my-1.5">You&apos;re paid for accepted submissions.</li>
          <li className="my-1.5">No ongoing commitment.</li>
        </ul>
      </div>

      <div className="border border-gray-200 rounded-xl p-3.5 mt-3.5 bg-gray-50">
        <strong>Data handling</strong>
        <ul className="mt-2.5 pl-[18px] list-disc">
          <li className="my-1.5">Hand histories are anonymized.</li>
          <li className="my-1.5">Analysis is done at the population level.</li>
          <li className="my-1.5">No raw hand histories are redistributed.</li>
        </ul>
      </div>

      <p className="mt-[18px] text-xs text-gray-500">
        Questions:{" "}
        <a href="mailto:santiago.weight@gmail.com" className="text-gray-500 hover:text-gray-700">
          santiago.weight@gmail.com
        </a>
      </p>
    </div>
  );
}
