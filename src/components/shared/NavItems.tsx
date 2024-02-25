"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex gap-6 ">
      {headerLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.name}
            className={`${
              isActive && "border-b-2 border-red-600"
            } text-slate-600`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
