"use client";

import { useState } from "react";
import { dots, type Dot, type Relationship } from "./dots-data";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(mmddyyyy: string) {
  const [mm, , yyyy] = mmddyyyy.split("/");
  return `${MONTH_NAMES[parseInt(mm, 10) - 1]} ${yyyy}`;
}

type Sentiment = "all" | "positive" | "negative";
type RelFilter = "all" | Relationship;
type Seniority = "all" | "very-senior" | "senior" | "junior";

const VERY_SENIOR_KEYWORDS = [
  "Very Senior",
  "Director",
  "Head of",
  "Chief",
  "Architect",
];

function getSeniority(dot: Dot): "very-senior" | "senior" | "junior" {
  const t = dot.title;
  if (VERY_SENIOR_KEYWORDS.some((k) => t.includes(k))) return "very-senior";
  if (t.startsWith("Senior") || t.includes("Tech Lead") || t.includes("Manager"))
    return "senior";
  return "junior";
}

function avgScore(dot: Dot) {
  return dot.scores.reduce((sum, s) => sum + s.value, 0) / dot.scores.length;
}

function isNegative(dot: Dot) {
  return avgScore(dot) < 7;
}

function scoreClasses(value: number) {
  if (value >= 7) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (value >= 5) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
}

function Toggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex rounded-md border border-gray-200 overflow-hidden text-xs">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 transition-colors ${
            value === opt.value
              ? "bg-gray-900 text-white font-medium"
              : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function DotCard({ dot }: { dot: Dot }) {
  return (
    <div id={`dot-${dot.id}`} className="border border-gray-200 rounded-lg px-4 py-3">
      <div className="flex justify-between items-baseline gap-3 mb-1">
        <p className="font-semibold text-gray-900 text-xs">
          {dot.reviewer === "Santi Weight" ? "From Myself" : dot.title}
          {dot.topic && (
            <span className="font-normal text-gray-400">
              {" "}({dot.topic})
            </span>
          )}
        </p>
        <span className="text-[11px] text-gray-400 tabular-nums flex-shrink-0">
          {formatDate(dot.date)}
        </span>
      </div>

      <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed mb-1.5">
        {dot.text}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {dot.scores.map((s, i) => (
          <span
            key={i}
            className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded border ${scoreClasses(s.value)}`}
          >
            {s.value} — {s.attribute}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CoworkerReviews() {
  const [sentiment, setSentiment] = useState<Sentiment>("all");
  const [rel, setRel] = useState<RelFilter>("all");
  const [seniority, setSeniority] = useState<Seniority>("all");

  const filtered = dots.filter((d) => {
    if (sentiment === "positive" && isNegative(d)) return false;
    if (sentiment === "negative" && !isNegative(d)) return false;
    if (rel !== "all" && d.relationship !== rel) return false;
    if (seniority !== "all" && getSeniority(d) !== seniority) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 pb-4 bg-white">
        <h2 className="text-[24px] font-bold mb-2">
          What my Coworkers think about me
        </h2>
        <div className="text-gray-500 text-sm mb-4 space-y-2">
          <p>
            At Bridgewater Associates, there is an (infamous) platform for
            mutual peer review: Dots. Rarely do you get to see what coworkers
            think about someone... but here you go.
          </p>
          <p>
            Each &ldquo;dot&rdquo; is a snippet into someone reflecting on
            working with me. The overall gist of mine is: people like working
            with me(!) and I have my moments of impatience that burn folks.
            I&apos;ve anonymized
            everything.
          </p>
          <p>
            Each tag is the ability to tag the reviews with numerical data on my
            performance &mdash; the numbers range 1&ndash;10. 1 means arsehole;
            10 means mensch.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Toggle
            options={[
              { value: "all", label: "All" },
              { value: "positive", label: "Positive" },
              { value: "negative", label: "Negative" },
            ]}
            value={sentiment}
            onChange={setSentiment}
          />
          <Toggle
            options={[
              { value: "all", label: "All" },
              { value: "manager", label: "Manager" },
              { value: "coworker", label: "Coworker" },
              { value: "report", label: "Report" },
            ]}
            value={rel}
            onChange={setRel}
          />
          <Toggle
            options={[
              { value: "all", label: "All" },
              { value: "very-senior", label: "Very Senior" },
              { value: "senior", label: "Senior" },
              { value: "junior", label: "Junior" },
            ]}
            value={seniority}
            onChange={setSeniority}
          />
          <span className="text-[11px] text-gray-400">
            {filtered.length} dot{filtered.length !== 1 && "s"}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pb-8">
        {filtered.map((dot) => (
          <DotCard key={dot.id} dot={dot} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm py-8 text-center">
            No dots match these filters.
          </p>
        )}
      </div>
    </div>
  );
}
