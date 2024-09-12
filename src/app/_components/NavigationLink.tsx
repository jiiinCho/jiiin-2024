import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";
import cn from "classnames";

type NavigationLinkProps = {
  pathname?: string;
  label: string;
  href: Url;
  newPage?: boolean;
};

export const NavigationLink = ({
  pathname,
  label,
  href,
  newPage,
}: NavigationLinkProps) => {
  return (
    <li
      className={cn(
        "py-1 md:flex grow min-w-[25%] border-t tracking-tight md:tracking-tighter leading-tight cursor-pointer transition-all duration-500 hover:text-primary hover:border-t-primary hover:font-medium",
        {
          "text-primary border-t-primary font-medium": pathname === href,
          "text-tertiary border-t-tertiary font-light": pathname !== href,
        }
      )}
    >
      <Link href={href} {...(newPage && { target: "_blank" })}>
        {label}
      </Link>
    </li>
  );
};
