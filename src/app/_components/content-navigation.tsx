import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { extractHeadings } from "@/lib/extract-headings";
import classNames from "classnames";

type Props = {
  content: string;
};

const HEADING_MAIN_LEVEL = 2;
const headingBaseClassNames = "block hover:opacity-80 hover:font-bold";
const headingMainLevelClassNames = "text-stone-600 dark:text-stone-300 py-2";
const headingSubLevelClassNames =
  "text-stone-400 dark:text-stone-400 pl-4 py-1 border-l-2";

export function ContentNavigation({ content }: Props) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState<string>("");

  const handleClickLink = useCallback((activeId: string) => {
    setActiveId(activeId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((heading) =>
        document.getElementById(heading.id)
      );

      const activeSection = headingElements.find((heading) => {
        if (heading) {
          const rect = heading.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        }
        return false;
      });

      if (activeSection) {
        setActiveId(activeSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(window.location.hash.substring(1));
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="sticky top-0 hidden lg:block">
      <nav
        aria-label="Table of Contents"
        className="absolute w-80 right-0 pl-8 text-sm"
      >
        <ul role="list">
          {headings.map((heading, index) => {
            return (
              <li key={index}>
                <Link
                  href={`#${heading.id}`}
                  className={classNames(
                    headingBaseClassNames,
                    heading.level === HEADING_MAIN_LEVEL
                      ? headingMainLevelClassNames
                      : headingSubLevelClassNames,
                    activeId === heading.id
                      ? "font-bold opacity-100"
                      : "opacity-50"
                  )}
                  aria-level={heading.level}
                  onClick={() => handleClickLink(heading.id)}
                >
                  {heading.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
