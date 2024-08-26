import Intro from "@/app/_components/intro";
import Hero from "@/app/_components/hero";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/service/posts";
import Container from "../_components/container";

export default function Index() {
  const allPosts = getAllPosts();
  const morePosts = allPosts;

  return (
    <main>
      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
