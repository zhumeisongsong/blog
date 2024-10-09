import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Category } from "@/interfaces/categories";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  categories?: Category[];
};

export function PostHeader({ title, coverImage, date, categories }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div
        className="mb-8 md:mb-8 sm:mx-0"
        style={{
          height: "48vh",
          overflow: "hidden",
        }}
      >
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>

        {categories &&
          categories.length > 0 &&
          categories.map((category: Category) => (
            <Link
              href={`/categories/${category}`}
              key={category}
              className="text-md mr-2 text-gray-500 hover:underline"
            >
              #{category}
            </Link>
          ))}
      </div>
    </>
  );
}
