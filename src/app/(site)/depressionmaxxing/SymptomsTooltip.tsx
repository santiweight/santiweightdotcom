"use client";

import { useState } from "react";

const SYMPTOMS = [
  { name: "Mood", desc: "persistent sadness or emptiness" },
  { name: "Anhedonia", desc: "nothing feels good anymore" },
  { name: "Weight", desc: "appetite up or down" },
  { name: "Sleep", desc: "too little or too much" },
  { name: "Psychomotor", desc: "visibly slowed or restless" },
  { name: "Fatigue", desc: "no energy, most days" },
  { name: "Worthlessness", desc: "worthless or excessively guilty" },
  { name: "Concentration", desc: "can't think or decide" },
  { name: "Death", desc: "recurring thoughts of dying" },
];

export default function SymptomsTooltip() {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow((s) => !s)}
        className="text-blue-600 hover:underline cursor-help"
      >
        [1]
      </button>
      {show && (
        <div className="absolute left-0 bottom-full mb-2 w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Diagnostic symptoms
          </p>
          <ul className="space-y-1">
            {SYMPTOMS.map((s) => (
              <li key={s.name} className="text-xs text-gray-600">
                <span className="font-semibold text-gray-900">{s.name}</span>
                {" — "}
                {s.desc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}
