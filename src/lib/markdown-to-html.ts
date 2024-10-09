import { remark } from "remark";
import remarkGemoji from 'remark-gemoji'
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGemoji)
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);

  return result.toString();
}
