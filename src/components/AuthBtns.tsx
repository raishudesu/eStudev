"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const AuthBtns = () => {
  const router = useRouter();
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
