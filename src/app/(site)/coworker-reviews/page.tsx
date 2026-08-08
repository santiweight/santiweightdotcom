import type { Metadata } from "next";
import CoworkerReviews from "./CoworkerReviews";

export const metadata: Metadata = {
  title: "What my Coworkers think about me — Santi Weight",
  description:
    "Anonymized peer feedback from coworkers, managers, and reports.",
};

export default function CoworkerReviewsPage() {
  return <CoworkerReviews />;
}
