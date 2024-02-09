"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className=" flex md:flex-row md:flex-between flex-col w-full items-start gap-5">
      {headerLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <li
            key={link.name}
            className={`${
              isActive && "text-pink-400 "
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
