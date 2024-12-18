import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { PageParams } from "@/interfaces/page-params";

export default async function Post({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            categories={post.categories}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Song's Blog`;
  const description = post.excerpt;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`;
  const image = new URL(
    post.coverImage,
    process.env.NEXT_PUBLIC_SITE_URL
  ).toString();

  console.log(post);

  return {
    title,
    description: post.excerpt,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
