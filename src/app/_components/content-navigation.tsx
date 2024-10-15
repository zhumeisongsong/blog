import titleToHyphen from "@/lib/title-to-hyphen";
import Link from "next/link";

type Props = {
  content: string;
};

function extractHeadings(markdown: string): { level: number; text: string }[] {
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    headings.push({ level, text });
  }

  return headings;
}

export function ContentNavigation({ content }: Props) {
  const headings = extractHeadings(content);
  return (
    <div className="sticky top-0">
      <div className="absolute w-80 right-0 pl-8 text-sm">
        {headings.map((heading, index) =>
          heading.level === 2 ? (
            <Link
              key={index}
              href={`#${titleToHyphen(heading.text)}`}
              className="text-stone-500 dark:text-stone-400 block opacity-80 hover:opacity-100 py-3"
            >
              {heading.text}
            </Link>
          ) : (
            <Link
              key={index}
              href={`#${titleToHyphen(heading.text)}`}
              className="text-stone-400 dark:text-stone-500 block opacity-80 hover:opacity-100 pl-4 py-1 border-l-2"
            >
              {heading.text}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
