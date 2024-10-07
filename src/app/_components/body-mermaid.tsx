"use client";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";

import mermaidStyles from "./mermaid-styles.module.css";

type Props = {
  graph: string;
};

export function BodyMermaid({ graph }: Props) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.contentLoaded(); // Rerenders any existing mermaid diagrams
    }
  }, [graph]);

  return (
    <div ref={chartRef} className={mermaidStyles["mermaid"]}>
      <div className="mermaid">{graph}</div>
    </div>
  );
}
