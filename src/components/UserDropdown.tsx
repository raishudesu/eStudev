"use client";

import { LogOut, PenSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarIcon from "./AvatarIcon";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const UserDropdown = () => {
  //   const session = await getServerSession();

  //   if (!session) return null;

  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="p-0 rounded-full">
          <AvatarIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 max-w-56">
        <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/dashboard"} className="w-full flex items-center">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/dashboard/create-thread"}
              className="w-full flex items-center"
            >
              <PenSquare className="mr-2 h-4 w-4" />
              Create thread
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/settings"} className="w-full flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={""}
            className="w-full flex items-center"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
