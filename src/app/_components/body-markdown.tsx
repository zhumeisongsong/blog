"use client";
import markdownToHtml from "@/lib/markdown-to-html";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

import markdownStyles from "./markdown-styles.module.css";
import addIdsToHeadings from "@/lib/add-ids-to-headings";

type Props = {
  content: string;
};

export function BodyMarkdown({ content }: Props) {
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setHtml(addIdsToHeadings(html));
    });
  }, [content]);

  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
}
