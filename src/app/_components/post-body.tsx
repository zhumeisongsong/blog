"use client";
import { BodyMarkdown } from "@/app/_components/body-markdown";
import { BodyMermaid } from "@/app/_components/body-mermaid";

type Props = {
  content: string;
};

const isMermaidGraph = (content: string) => {
  const mermaidKeywords = [
    "graph",
    "flowchart",
    "sequenceDiagram",
    "classDiagram",
    "stateDiagram",
    "erDiagram",
    "journey",
  ];
  return mermaidKeywords.some((keyword) => content.trim().startsWith(keyword));
};

export function PostBody({ content }: Props) {
  const array = content.split("```");

  return (
    <div className="max-w-2xl mx-auto">
      {array.map((item, index) => {
        if (isMermaidGraph(item)) {
          return <BodyMermaid key={index} graph={item} />;
        }
        return <BodyMarkdown key={index} content={item} />;
      })}
    </div>
  );
}
