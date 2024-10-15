import titleToHyphen from "./title-to-hyphen";

export default function addIdsToHeadings(html: string) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const headings = tempDiv.querySelectorAll("h2, h3");

  headings.forEach((heading) => {
    const text = heading.textContent;
    if (text) {
      const id = titleToHyphen(text);
      heading.setAttribute("id", id);
    }
  });

  console.log(headings);

  return tempDiv.innerHTML;
}
