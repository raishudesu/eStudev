"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const AuthBtns = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname !== "/") return null;
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
