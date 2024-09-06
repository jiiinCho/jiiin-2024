import Intro from "@/app/_components/intro";
import { Hero, Marquee, Works } from "@/app/_components";
import { getAllPosts } from "@/lib/service/posts";
import Container from "./_components/container";

export default function Index() {
  const allPosts = getAllPosts();

  const marquee = "UX/UI DESIGN 🦋 FRONTEND DEVELOER 🦋 WEB DEVELOPER 🦋";

  return (
    <main>
      <div className="h-screen max-h-[1024px] w-full relative">
        <Hero />
        <Intro />
      </div>
      <Marquee text={marquee} repeat={5} />
      <Container classNames="bg-secondary">
        {allPosts.length > 0 && <Works posts={allPosts} />}
      </Container>
    </main>
  );
}
