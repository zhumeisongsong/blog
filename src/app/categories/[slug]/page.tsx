import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
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
        <Intro />
        <h2 className="mb-8 text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
          #{params.slug}
        </h2>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
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
