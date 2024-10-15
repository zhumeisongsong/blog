"use client";
import { BodyMarkdown } from "@/app/_components/body-markdown";
import { BodyMermaid } from "@/app/_components/body-mermaid";
import { ContentNavigation } from "@/app/_components/content-navigation";
import { useEffect, useState } from "react";

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
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    if (content) {
      setArray(content.split("<!-- mermaid -->"));
    }
  }, [content, setArray]);

  return (
    <div>
      <ContentNavigation content={content} />
      <div className="lg:pr-80">
      {array.map((item, index) => {
        if (isMermaidGraph(item)) {
          return <BodyMermaid key={index} graph={item} />;
        }
        return <BodyMarkdown key={index} content={item} />;
      })}
         </div>
    </div>
  );
}
