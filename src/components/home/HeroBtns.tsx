"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const HeroBtns = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/sign-in")}>Get started</Button>
      <Button onClick={() => router.push("/threads")} variant={"secondary"}>
        Threads
      </Button>
    </>
  );
};

export default HeroBtns;
