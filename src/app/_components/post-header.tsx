import { Post } from "@/interfaces/post";

export function PostHeader({
  title,
  tags,
  url,
}: Pick<Post, "title" | "tags" | "url">) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-5xl font-medium uppercase leading-[42px] mb-2">
        {title}
      </h1>
      <p className="text-lg font-light">{tags}</p>
      <p className="text-lg font-light">2024</p>

      {url && (
        <a href={url} target="_blank" className="underline">
          Link to website
        </a>
      )}
    </section>
  );
}
