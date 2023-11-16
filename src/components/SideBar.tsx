"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Atom, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import AuthBtns from "./AuthBtns";
import SearchBtn from "./SearchBtn";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="overflow-y-auto flex flex-col items-start"
      >
        <SheetHeader>
          <SheetTitle className="flex gap-1">Studev Forums </SheetTitle>
        </SheetHeader>

        <Separator />
        <div className="w-full flex flex-col gap-3">
          <SearchBtn />
          <NavMenu />
          <Separator />
          <AuthBtns />
        </div>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
