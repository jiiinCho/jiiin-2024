import Image from "next/image";
import cn from "classnames";
import type { Post } from "../../interfaces/post";

export function PostBody({ videos, title, coverImage, excerpt }: Post) {
  return (
    <div className="overflow-hidden w-full max-w-[1024px] mx-auto">
      {videos ? (
        videos.split(", ").map((video) => <Video key={video} url={video} />)
      ) : (
        <>
          <Image
            src={coverImage}
            alt={`Image for ${title}`}
            className={cn("w-full object-center object-contain mb-12")}
            width={1024}
            height={768}
          />
          {excerpt && (
            <Image
              src={excerpt}
              alt={`Image for ${title}`}
              className={cn("w-full object-center object-contain")}
              width={1024}
              height={768}
            />
          )}
        </>
      )}
    </div>
  );
}

const Video = ({ url }: { url: string }) => {
  return (
    <iframe
      className="mb-12"
      width="1024"
      height="576"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};
