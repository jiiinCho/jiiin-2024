import markdownToHtml from "../../lib/markdownToHtml";
import type { Post } from "../../interfaces/post";
import { BackButton } from "./back-button";
import markdownStyles from "./post-details.module.css";

async function PostDetails({ content, title, tags, url, date }: Post) {
  const markdownContent = await markdownToHtml(content || "");

  return (
    <section className="flex flex-col gap-4 max-w-[520px]">
      <h1 className="text-5xl font-medium uppercase leading-[42px] mb-2">
        {title}
      </h1>
      <p className="text-lg font-light">{tags}</p>
      <p className="text-lg font-light">{new Date(date).getFullYear()}</p>

      {url && (
        <a href={url} target="_blank" className="underline">
          Link to website
        </a>
      )}

      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: markdownContent }}
      />

      <BackButton />
    </section>
  );
}

export default PostDetails;
