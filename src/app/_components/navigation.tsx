"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import cn from "classnames";

type NavItemProps = {
  active: boolean;
  href: string;
  children: ReactNode;
};

const NavItem = ({ active, href, children }: NavItemProps) => {
  console.log("active", active);
  return (
    <li
      className={cn(
        "w-1/4 grow text-sm font-light border-t border-t-tertiary tracking-tight md:tracking-tighter leading-tight flex cursor-pointer transition-all duration-500 uppercase hover:text-secondary hover:border-t-secondary hover:font-medium z-10 backdrop-blur-sm",
        {
          "border-t-secondary font-medium": active,
        }
      )}
    >
      <Link
        href={href}
        className={cn("pt-1", {
          "text-secondary": active,
        })}
      >
        {children}
      </Link>
    </li>
  );
};

const Navigation = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "jiiin.c" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav>
      <ul className="p-4 flex absolute top-0 left-0 right-0">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            active={pathname === item.href}
            href={item.href}
          >
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
