import { defaultCategories } from "@/interfaces/categories";
import Link from "next/link";

const AllCategories = () => {
  return (
    <>
      <h2 className="mb-8 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
        All Categories
      </h2>
      {Object.keys(defaultCategories).map((key) => (
        <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
          <Link href={`/categories/${key}`}># {key}</Link>
        </h2>
      ))}
    </>
  );
};

export default AllCategories;
