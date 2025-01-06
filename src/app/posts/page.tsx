import Container from "@/app/_components/container";
import { Posts } from "@/app/_components/posts";
import { getAllPostsGroupByYear } from "@/lib/api";
import Header from "../_components/header";
import { notFound } from "next/navigation";

export default function AllPosts() {
  const allPostsGroupByYear = getAllPostsGroupByYear();

  if (!allPostsGroupByYear) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />

        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          All Stories
        </h2>

        {allPostsGroupByYear.map(([year, posts]) => (
          <div key={year}>
            <h3 className="text-3xl font-bold mt-16 mb-8">{year} ({posts.length})</h3>
            <Posts posts={posts} />
          </div>
        ))}
      </Container>
    </main>
  );
}
