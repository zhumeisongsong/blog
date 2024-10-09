import Container from "@/app/_components/container";
import { Posts } from "@/app/_components/posts";
import { getAllPosts } from "@/lib/api";
import Header from "../_components/header";

export default function AllPosts() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {allPosts.length > 0 && (
          <>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              All Stories
            </h2>
            <Posts posts={allPosts} />
          </>
        )}
      </Container>
    </main>
  );
}
