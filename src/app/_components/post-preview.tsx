import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <Link href={`/posts/${slug}`}>
      <div
        className="mb-5"
        style={{
          height: "40vh",
          maxHeight: "240px",
          overflow: "hidden",
        }}
      >
        <CoverImage
          title={title}
          image={{ src: coverImage }}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 opacity-50">{excerpt}</p>
    </Link>
  );
}
