"use client";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";

import mermaidStyles from "./mermaid-styles.module.css";

type Props = {
  graph: string;
};

export function BodyMermaid({ graph }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      try {
        mermaid.contentLoaded();
      } catch (error) {
        console.error("Error rendering mermaid diagram:", error);
        // Optionally, you could set an error state here and render an error message
      }
    }
  }, [graph]);

  // Basic validation
  if (!graph || typeof graph !== "string") {
    return <div>Invalid graph data</div>;
  }

  return (
    <div ref={chartRef} className={mermaidStyles["mermaid"]}>
      <div className="mermaid">{graph}</div>
    </div>
  );
}
