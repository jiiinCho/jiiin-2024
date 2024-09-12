import NavigationLink from "./navigation-link";

function Footer() {
  return (
    <footer className="z-10 fixed inset-x-8 bottom-6">
      <ul className="flex w-full relative">
        <div className="absolute inset-0 z-[-1] bg-secondary opacity-80"></div>
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
        <li className="py-1 justify-end lg:flex hidden grow min-w-[25%] font-light text-tertiary border-t border-t-tertiary tracking-tight md:tracking-tighter leading-tight">
          &copy; kyung-jin cho 2024
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
