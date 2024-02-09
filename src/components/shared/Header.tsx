import Link from "next/link";
import Image from "next/image";
import { Big_Shoulders_Stencil_Display } from "next/font/google";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const big = Big_Shoulders_Stencil_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  return (
    <header className="w-full border-b border-gray-500 flex flex-between px-4 py-2">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/assets/logos/logo.svg"
            alt="logo"
            width={28}
            height={28}
            className=" max-w-8"
          />
        </Link>
        <h2 className={`${big.className} text-2xl  font-semibold`}>
          {" "}
          <span className="bg-gradient-to-r from-indigo-500  to-indigo-300 text-transparent bg-clip-text ">
            Simo
          </span>
          <span className="bg-gradient-to-r from-pink-300  to-pink-500 text-transparent bg-clip-text ">
            World
          </span>
        </h2>
      </div>

      <div className=" flex justify-between items-center gap-3 ">
        <SignedIn>
          <UserButton afterSignOutUrl="/" appearance={{ elements: "1rem" }} />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <Button
            asChild
            className="rounded-full text-2xl text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hidden md:block py-1"
            size="lg"
          >
            <Link href="/login">Inicio</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
