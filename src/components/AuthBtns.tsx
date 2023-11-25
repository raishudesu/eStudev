"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

const AuthBtns = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();
  if (session.status === "authenticated") return null;
  if (pathname !== "/" && pathname !== "/about") return null;
  return (
    <>
      <Button size={"sm"} onClick={() => router.push("/sign-in")}>
        Sign in
      </Button>
      <Button
        size={"sm"}
        variant={"secondary"}
        onClick={() => router.push("/register")}
      >
        Register
      </Button>
    </>
  );
};

export default AuthBtns;
