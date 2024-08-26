import Intro from "@/app/_components/intro";
import Hero from "@/app/_components/hero";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/service/posts";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0]; // latest post

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Hero />
      <Intro />
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </main>
  );
}
