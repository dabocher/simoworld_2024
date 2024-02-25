import Image from "next/image";
import Link from "next/link";
import { Staatliches } from "next/font/google";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 flex items-center justify-between">
        <Link href="/" className="flex flex-row w-36 gap-1">
          <Image
            src="/assets/logos/logo.svg"
            alt="Simoworld logo"
            width={28}
            height={28}
          />
          <h2
            className={`${staatliches.className} font-bold text-slate-600 text-2xl`}
          >
            Simoworld
          </h2>
        </Link>
        <SignedIn>
          <nav className="md:flex md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "24px",
                    height: "24px",
                  },
                },
              }}
              afterSignOutUrl="/"
            />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full bg-slate-600" size="sm">
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
