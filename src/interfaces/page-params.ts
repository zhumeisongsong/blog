//Break change of Next.js 15
// https://nextjs.org/docs/app/building-your-application/upgrading/version-15#asynchronous-page

export type PageParams = Promise<{
  slug: string;
}>;