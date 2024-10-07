"use client";
import { BodyMarkdown } from "@/app/_components/body-markdown";
import { BodyMermaid } from "@/app/_components/body-mermaid";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  const array = content.split("```");

  return (
    <div className="max-w-2xl mx-auto">
      {array.map((item, index) => {
        if (item.indexOf("graph") > -1) {
          return <BodyMermaid key={index} graph={item} />;
        }
        return <BodyMarkdown key={index} content={item} />;
      })}
    </div>
  );
}
