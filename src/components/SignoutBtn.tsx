"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const SignoutBtn = () => {
  return (
    <Link
      href={""}
      className="w-full flex items-center"
      onClick={() => signOut()}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </Link>
  );
};

export default SignoutBtn;
