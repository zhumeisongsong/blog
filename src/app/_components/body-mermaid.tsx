"use client";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";

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
    <div
      ref={chartRef}
      className="mermaid flex align-center justify-center bg-neutral-50 rounded-lg p-16"
    >
      {graph}
    </div>
  );
}
