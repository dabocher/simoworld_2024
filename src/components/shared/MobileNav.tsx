import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            width={24}
            height={24}
            alt="menu logo"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white-50 md:hidden">
          <div className="flex flex-row w-full pb-4 gap-1 border-b-2 border-b-slate-300">
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
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
