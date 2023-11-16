import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import { GanttChart } from "lucide-react";
import Sidebar from "./SideBar";
import AuthBtns from "./AuthBtns";
import SearchBtn from "./SearchBtn";
import gearsLogo from "@/assets/gear-logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="z-50 fixed px-6 backdrop-blur-xl w-full flex justify-center border-b dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex gap-3 justify-between  items-center h-14">
        <div className="flex gap-6">
          <Link
            href={"/"}
            className="flex gap-1 items-center scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0"
          >
            <Image src={gearsLogo} alt="gears-logl" className="max-w-[30px]" />
            <div>
              think<span className="text-[#FACC15]">sync</span>
            </div>
          </Link>
          <div className="hidden md:block">
            <NavMenu />
          </div>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <SearchBtn />
          <AuthBtns />
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
