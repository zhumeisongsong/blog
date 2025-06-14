import Image from "next/image";

type Props = {
  title: string;
  image: {
    src: string;
    priority?: boolean;
  };
};

const CoverImage = ({ title, image: { src, priority = false } }: Props) => {
  return (
    <div className="sm:mx-0 w-full">
      <Image
        src={src}
        alt={`Cover for ${title}`}
        width={1300}
        height={630}
        priority={priority}
        quality={50}
        className="w-full"
      />
    </div>
  );
};

export default CoverImage;
