import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Big_Shoulders_Stencil_Display } from "next/font/google";

import Image from "next/image";
import NavItems from "./NavItems";

const big = Big_Shoulders_Stencil_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MobileNav = () => {
  return (
    <nav className=" mx-3">
      <Sheet>
        <SheetTrigger asChild className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={36}
            height={36}
            color="white"
            className="cursor-pointer text-white "
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-black ">
          <SheetHeader>
            <SheetTitle className="flex gap-3">
              <Image
                src="/assets/logos/logo.svg"
                alt="logo"
                width={36}
                height={36}
                className="w-[8vw] h-[8vw] max-w-10"
              />
              <h2 className={`${big.className} text-2xl  font-semibold`}>
                {" "}
                <span className="bg-gradient-to-r from-indigo-500  to-indigo-300 text-transparent bg-clip-text ">
                  Simo
                </span>
                <span className="bg-gradient-to-r from-pink-300  to-pink-500 text-transparent bg-clip-text ">
                  World
                </span>
              </h2>
            </SheetTitle>
            <SheetDescription>
              Congregador de recursos y planificador de eventos de simracing.
            </SheetDescription>
            <Input
              id="search"
              className="h-7 w-4/5 self-center text-black"
              placeholder="Buscar..."
            />
          </SheetHeader>

          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
