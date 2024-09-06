import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Post } from "@/interfaces/post";

export function PostPreview(props: Post) {
  const { title, slug, coverImage, tags } = props;
  return (
    <div className="overflow-hidden rounded-2xl relative">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <div className="absolute bottom-4 left-4">
        {tags.split(", ").map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </div>
  );
}

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="text-primary inline-flex bg-secondary rounded-full p-3 py-1 mr-3">
      {tag}
    </div>
  );
};
