import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li className="w-1/4 grow text-sm font-light text-white border-t border-t-tertiary tracking-tight md:tracking-tighter leading-tight flex  cursor-pointer transition-all duration-500 uppercase hover:text-primary hover:border-t-primary hover:font-medium z-10 backdrop-blur-sm">
      <Link href={href} className="pt-1">
        {children}
      </Link>
    </li>
  );
};

const Navigation = () => {
  const navItems = [
    { href: "/", label: "jiiin" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav>
      <ul className="w-full p-4 flex">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
