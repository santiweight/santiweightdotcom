import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "A New Wave of IDEs + Coding Languages is Imminent — Santi Weight",
  description:
    "Why programming languages are an unexplored bottleneck, how they're becoming a valid business model, and why niche IDEs will beat generalist ones.",
};

export default function ProductEngineeringIdeArticle() {
  const filePath = path.join(
    process.cwd(),
    "src/content/articles/product-engineering-ide.md"
  );
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-[900px] mx-auto px-[18px] py-7 pb-12">
      <Header variant="page" />

      <article className="prose prose-gray mx-auto prose-headings:font-bold prose-a:text-black prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:text-black prose-code:font-normal prose-code:rounded prose-code:px-1.5 prose-code:py-0.5">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
