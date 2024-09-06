import { Post } from "@/interfaces/post";
import { PostPreview } from "./PostPreview";
import styles from "./Works.module.css";

type Props = {
  posts: Post[];
};

export const Works = ({ posts }: Props) => {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-8 xl:gap-x-16 gap-y-20 xl:gap-y-32 mb-32 ${styles.root}`}
    >
      {posts.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </section>
  );
};
