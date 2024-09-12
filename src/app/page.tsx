import { getAllPosts } from "@/lib/service/posts";
import { ArrowDown, Hero, Footer, WorkItem } from "./_components";

export default function Index() {
  const works = getAllPosts();

  return (
    <main className="relative h-screen w-full">
      <Hero />
      <div className="h-[90vh] w-full">
        <ArrowDown />
      </div>
      <ul>
        {works.map((work) => (
          <WorkItem key={work.slug} {...work} />
        ))}
      </ul>
      {/* <div className="h-[50vh] w-full"></div> */}
      <Footer />
    </main>
  );
}
