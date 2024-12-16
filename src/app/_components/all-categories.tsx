import { defaultCategories } from "@/interfaces/categories";
import Link from "next/link";

const AllCategories = () => {
  return (
    <div className="pb-16">
      <h2 className="mb-8 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
        All Categories
      </h2>
      {Object.keys(defaultCategories).map((key) => (
        <h2 className="mb-2 text-sky-500 tracking-tighter leading-tight" key={key}>
          <Link href={`/categories/${key}`}># {key}</Link>
        </h2>
      ))}
    </div>
  );
};

export default AllCategories;
