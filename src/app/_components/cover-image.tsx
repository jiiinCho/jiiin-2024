import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "w-full object-center object-contain hover:scale-95 transition-all duration-500"
      )}
      width={1024}
      height={768}
    />
  );
};

export default CoverImage;
