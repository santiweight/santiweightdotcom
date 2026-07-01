import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Past Work — Santi Weight",
  description: "A look back at projects Santi Weight has worked on.",
};

export default function PastWorkPage() {
  return (
    <div className="max-w-[680px] mx-auto px-[18px] py-7 pb-12">
      <Header variant="page" />

      <h2 className="text-[24px] font-bold mb-6">Past Work</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-gray-900">
            Excel for Investors, Bridgewater Associates
          </h3>
          <p className="mt-1">
            Proprietary. I was part of a 0&nbsp;
            <span className="text-gray-400 font-mono">&rarr;</span>
            &nbsp;1 team that built a greenfield investor experience for
            exploring new ideas at Bridgewater from ideation to early
            execution. Project included a fresh programming language stack,
            IDE, and execution engine.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Legacy Investment Platform, Bridgewater Associates
          </h3>
          <p className="mt-1">
            Proprietary. I helped maintain Bridgewater&apos;s research
            platform, which included custom execution engines, IDEs
            (plural!), and even custom programming language.
          </p>
          <p className="mt-1">
            Nowadays, my main goal is to make this work be replaced by the{" "}
            <strong>AI Analyst</strong> 🙃.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Startup Stuff, Luminous Computing
          </h3>
          <p className="mt-1">
            At Luminous I was doing a bit of everything. Primary project was
            building a simulator to predict the performance of the
            supercomputer we were building. But also helped build out
            investor decks and meetings, and was just generally scrappy.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            NQE, Forward Networks
          </h3>
          <p className="mt-1">
            NQE is a programming language for networking engineers to
            validate their network configuration and prevent (extremely
            expensive!) outages. I helped build a brand new type checker,
            formatter, and versioning system.
          </p>
        </div>
      </div>
    </div>
  );
}
