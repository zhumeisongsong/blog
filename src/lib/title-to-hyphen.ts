export default function titleToHyphen(title: string) {
  return title.toLowerCase().replace(/\s/g, "-");
} 