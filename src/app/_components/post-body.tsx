"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  const chartRef = useRef(null);
  const array = content.split("```");

  useEffect(() => {
    array.map((item, index) => {
      if (item.indexOf("graph") > -1 && chartRef.current) {
        console.log(item);
        mermaid.contentLoaded(); // Rerenders any existing mermaid diagrams
      }
    });
  }, [array]);

  return (
    <div className="max-w-2xl mx-auto">
      {array.map((item, index) => {
        if (item.indexOf("graph") > -1) {
          return (
            <div ref={chartRef} key={index} className="mermaid">
              {item}
            </div>
          );
        }
        return (
          <div
            key={index}
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        );
      })}
    </div>
  );
}
