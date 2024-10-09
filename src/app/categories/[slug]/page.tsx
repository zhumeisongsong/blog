import AllCategories from "@/app/_components/all-categories";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Posts } from "@/app/_components/posts";
import { Category, defaultCategories } from "@/interfaces/categories";
import { getPostsByCategory } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function FilteredPosts({ params }: Params) {
  const filteredPosts = getPostsByCategory(params.slug as Category);

  if (!filteredPosts) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
          #{params.slug}
        </h2>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        <AllCategories />
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(defaultCategories).map((key) => ({
    slug: key,
  }));
}
