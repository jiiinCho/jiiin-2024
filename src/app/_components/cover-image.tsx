import cn from "classnames";
import Link from "next/link";
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
      className={cn("shadow-sm w-full object-center object-cover", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      // width={1300}
      // height={630}
      fill
      sizes="100vw"
    />
  );
  return (
    <div className="sm:mx-0 h-[38rem] relative">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
