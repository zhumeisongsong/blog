import { type Category } from "@/interfaces/categories";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostsByCategory(category: Category): Post[] {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.categories?.includes(category));
}

export function getPinnedPosts(): Post[] {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.pin);
}

export function getAllPostsGroupByYear(): [string, Post[]][] {
  const allPosts = getAllPosts();

  const postsGroupByYear = allPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, Post[]>);

  const sortedPostsGroupByYear = Object.entries(postsGroupByYear).sort(
    ([year1], [year2]) => Number(year2) - Number(year1)
  );

  return sortedPostsGroupByYear;
}
