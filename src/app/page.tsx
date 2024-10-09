import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { Posts } from "@/app/_components/posts";
import { getPinnedPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const pinnedPosts = getPinnedPosts();

  const heroPost = pinnedPosts[0];

  const morePosts = pinnedPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {pinnedPosts.length > 0 && <Posts posts={morePosts} />}
        <div className="mb-8 text-center">
          <Link href="/posts" className="hover:underline">
            {">"} All Stories {"<"}
          </Link>
        </div>
      </Container>
    </main>
  );
}
