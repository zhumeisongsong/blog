import Image from "next/image";

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <div className="sm:mx-0">
      <Image src={src} alt={`Cover for ${title}`} width={1300} height={630}/>
    </div>
  );
};

export default CoverImage;
