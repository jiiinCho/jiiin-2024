import Link from "next/link";
import Container from "./container";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Platter.
      </h1>
      <nav className="flex">
        <h2 className="text-xl tracking-tighter leading-tight md:pr-8">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </h2>
      </nav>
    </section>
  );
}
