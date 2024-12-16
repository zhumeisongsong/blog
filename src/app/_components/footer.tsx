import Container from "@/app/_components/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-stone-800">
      <Container>
        <div className="flex flex-col items-end gap-6 pt-16 pb-4">
          <div className="flex flex-col items-end">
            <div className="text-xl">
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(120deg, #bd34fe 30%, #41d1ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="font-bold"
              >
                Zhumei Song
              </span>
            </div>
            <div>Software engineer based in Tokyo. 🇯🇵</div>
          </div>

          <div className="flex gap-2">
            <a href="https://github.com/zhumeisongsong" target="_blank">
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/zhumeisongsong-444.svg?&logo=GitHub&logoColor=white&style=for-the-badge"
              />
            </a>

            <a href="https://zhumeisongsong.github.io/blog" target="_blank">
              <img
                alt="Blog"
                src="https://img.shields.io/badge/Song's%20Blog-6c3485.svg?&style=for-the-badge&logo=Next.js&logoColor=white"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/zhumei-song-a9041a1bb"
              target="_blank"
            >
              <img
                alt="Linkedin"
                src="https://img.shields.io/badge/linkdin-0a66c2.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
              />
            </a>
            {/* add cv */}
            {/* add home page */}
          </div>

          <div className="opacity-50 text-sm pt-8">© {currentYear}</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
