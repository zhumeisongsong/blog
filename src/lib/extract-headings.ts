import titleToHyphen from "./title-to-hyphen";

export function extractHeadings(
  markdown: string
): { level: number; text: string; id: string }[] {
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings = [];
  let match: RegExpExecArray | null;

  while (true) {
    match = headingRegex.exec(markdown);
    if (match === null) break;

    const level = match[1].length;
    const text = match[2].trim();
    headings.push({ level, text, id: titleToHyphen(text) });
  }

  return headings;
}
