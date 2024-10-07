"use client";
import markdownToHtml from "@/lib/markdown-to-html";
import { useEffect, useState } from "react";

import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function BodyMarkdown({ content }: Props) {
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setHtml(html);
    });
  }, [content]);

  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
