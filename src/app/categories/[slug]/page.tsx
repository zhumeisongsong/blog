import AllCategories from "@/app/_components/all-categories";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Posts } from "@/app/_components/posts";
import { Category, defaultCategories } from "@/interfaces/categories";
import { PageParams } from "@/interfaces/page-params";
import { getPostsByCategory } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function FilteredPosts({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const filteredPosts = getPostsByCategory(slug as Category);

  if (!filteredPosts) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
          #{slug}
        </h2>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        <AllCategories />
      </Container>
    </main>
  );
}

//
type Params = Promise<{
  slug: string;
}>;

export async function generateStaticParams() {
  return Object.keys(defaultCategories).map((key) => ({
    slug: key,
  }));
}
