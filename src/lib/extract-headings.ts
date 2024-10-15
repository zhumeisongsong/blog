import titleToHyphen from "./title-to-hyphen";

export function extractHeadings(
  markdown: string
): { level: number; text: string; id: string }[] {
  if (typeof markdown !== "string" || markdown.trim() === "") {
    return [];
  }

  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    headings.push({ level, text, id: titleToHyphen(text) });
  }

  if (headings.length === 0) {
    console.warn("No headings found in the provided markdown");
  }

  return headings;
}
