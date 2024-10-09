import cn from "classnames";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={"shadow-sm w-full"}
      width={1300}
      height={630}
    />
  );
  return <div className="sm:mx-0">{image}</div>;
};

export default CoverImage;
