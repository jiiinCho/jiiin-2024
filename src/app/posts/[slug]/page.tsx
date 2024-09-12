import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/service/posts";
import { CMS_NAME } from "../../../lib/constants";
import PostDetails from "../../_components/PostDetails";
import PostBody from "../../_components/PostBody";
import Container from "../../_components/Container";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <article className="flex gap-16 xl:flex-row flex-col">
          <PostDetails {...post} />
          <PostBody {...post} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Food Recipes Blog with ${CMS_NAME}`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
