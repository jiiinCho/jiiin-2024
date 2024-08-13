import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAboutContent } from "@/lib/service/about";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";

export default async function About() {
  const about = getAboutContent();

  if (!about) {
    return notFound();
  }

  const content = await markdownToHtml(about.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const about = getAboutContent();

  if (!about) {
    return notFound();
  }

  const title = `${about.title} | Food Recipes Blog with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [about.ogImage.url],
    },
  };
}
