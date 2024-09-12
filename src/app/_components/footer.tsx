import NavigationLink from "./navigation-link";

function Footer() {
  return (
    <footer className="px-8 pb-6 mt-[50vh] snap-end">
      <ul className="flex w-full relative text-sm 2xl:text-lg">
        <NavigationLink
          label="Email"
          href="mailto:jiiin.cho.dev@gmail.com"
          newPage
        />
        <NavigationLink
          label="Github"
          href="https://github.com/jiiinCho"
          newPage
        />
        <NavigationLink
          label="Linkedin"
          href="https://www.linkedin.com/in/jnch/"
          newPage
        />
        <li className="py-1 justify-end lg:flex hidden grow min-w-[25%] font-light text-tertiary border-t border-t-tertiary tracking-tight md:tracking-tighter leading-tight pr-2">
          &copy; kyung-jin cho 2024
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
