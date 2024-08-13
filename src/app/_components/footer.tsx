import Container from "@/app/_components/container";
// import { EXAMPLE_PATH } from "@/lib/constants";
import { CMS_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-6 bg-gray-700 border-t border-gray-500 dark:bg-slate-800">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div> */}
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-zinc-300">
            A statically generated food recipe blog using{" "}
            <a
              href="https://nextjs.org/"
              className="hover:text-blue-600 hover:underline duration-200 transition-colors"
            >
              Next.js
            </a>{" "}
            and {CMS_NAME}.
          </h4>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
