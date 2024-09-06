import Intro from "@/app/_components/intro";
import Hero from "@/app/_components/hero";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/service/posts";
import Container from "./_components/container";

export default function Index() {
  const allPosts = getAllPosts();

  const bannerText = "web development 🦋 UX/UI design 🦋";
  const bannerCount = 5;
  return (
    <main>
      <div className="h-screen max-h-[1024px] w-full relative">
        <Hero />
        <Intro />
      </div>
      <div className="uppercase bg-primary-lightest text-xl py-2 text-primary font-medium">
        {bannerText.repeat(bannerCount)}
      </div>
      <Container classNames="bg-secondary">
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
