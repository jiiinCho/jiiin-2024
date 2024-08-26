import { Post } from "@/interfaces/post";

export function PostHeader({
  title,
  tags,
  url,
}: Pick<Post, "title" | "tags" | "url">) {
  return (
    <section className="flex flex-col font-light mb-32">
      <article className="mb-[24vh]">
        <h1 className="text-5xl font-semibold uppercase leading-[42px] mb-2">
          {title}
        </h1>
        <div className="mb-6">
          {tags.split(", ").map((tag) => (
            <p key={tag}>/ {tag}</p>
          ))}
        </div>
        {url && (
          <a href={url} target="_blank" className="underline">
            Link to website
          </a>
        )}
      </article>
    </section>
  );
}
