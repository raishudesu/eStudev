import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import { GanttChart } from "lucide-react";
import Sidebar from "./SideBar";
import AuthBtns from "./AuthBtns";
import SearchBtn from "./SearchBtn";

const Header = () => {
  return (
    <header className="z-50 fixed px-6 backdrop-blur-xl w-full flex justify-center border-b dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex gap-3 md:justify-between  items-center h-14">
        <div className="md:hidden">
          <Sidebar />
        </div>

        <div className="flex gap-6">
          <Link
            href={"/"}
            className="flex items-center scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0"
          >
            <GanttChart />
            think<span className="text-[#FACC15]">sync</span>
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
      </div>
    </header>
  );
};

export default Header;
