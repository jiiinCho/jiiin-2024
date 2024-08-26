import { Post } from "@/interfaces/post";
import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";
import cn from "classnames";

type Props = {
  content: string;
} & Pick<Post, "url" | "videos" | "title" | "coverImage">;

export function PostBody({ content, videos, title, coverImage }: Props) {
  return (
    <div className="col-span-2 font-light">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {videos ? (
        videos.split(", ").map((video) => <Video key={video} url={video} />)
      ) : (
        <div className="w-[560px] h-[315px] mx-auto">
          <Image
            src={coverImage}
            alt={`Image for ${title}`}
            className={cn("w-full object-center object-contain")}
            width={560}
            height={315}
          />
        </div>
      )}
    </div>
  );
}

const Video = ({ url }: { url: string }) => {
  return (
    <iframe
      className="mx-auto my-12"
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};
