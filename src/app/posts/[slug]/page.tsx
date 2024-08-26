import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/service/posts";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        {/* <Header /> */}
        <article className="grid grid-cols-1 gap-x-16 md:grid-cols-3 md:gap-x-16 xl:gap-x-16 gap-y-20 xl:gap-y-32 mb-32">
          <PostHeader {...post} />
          <PostBody
            content={content}
            videos={post.videos}
            url={post.url}
            title={post.title}
            coverImage={post.coverImage}
          />
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
