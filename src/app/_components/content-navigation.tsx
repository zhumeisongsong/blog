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
    <div className="sticky top-0 hidden lg:block">
      <nav
        aria-label="Table of Contents"
        className="absolute w-80 right-0 pl-8 text-sm"
      >
        <ul role="list">
          {headings.map((heading, index) => (
            <li key={index}>
              <Link
                key={index}
                href={`#${titleToHyphen(heading.text)}`}
                className={`block opacity-80 hover:opacity-100 ${
                  heading.level === 2
                    ? "text-stone-600 dark:text-stone-400 py-3"
                    : "text-stone-400 dark:text-stone-500 pl-4 py-1 border-l-2"
                }`}
                aria-level={heading.level}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
