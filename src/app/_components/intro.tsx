import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Song&apos;s Blog
        </h1>
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Objects are abstractions of processing.
        <br />
        Threads are abstractions of schedule.
      </h4>
    </section>
  );
}
