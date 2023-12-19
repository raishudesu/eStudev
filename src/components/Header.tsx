import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import Sidebar from "./SideBar";
import UserDropdown from "./UserDropdown";
import ShowAuthBtns from "./ShowAuthBtns";
import SearchDialog from "@/app/search/[query]/components/SearchDialog";
import { Code2 } from "lucide-react";
import SearchForm from "@/app/search/[query]/components/SearchForm";
import SearchBar from "@/app/search/[query]/components/SearchBar";

const Header = () => {
  return (
    <header className="z-50 fixed px-6 backdrop-blur-xl w-full flex justify-center border-b dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex gap-3 justify-between  items-center h-14">
        <div className="flex gap-6">
          <Link
            href={"/"}
            className="flex gap-1 items-center scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0"
          >
            <Code2 className="text-yellow-500" />
            <div>
              eStu<span className="text-yellow-500">dev</span>
            </div>
          </Link>
          <div className="hidden md:block">
            <NavMenu />
          </div>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          {/* <SearchDialog /> */}
          <SearchBar />
          <UserDropdown />
          <ShowAuthBtns />
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <UserDropdown />
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
