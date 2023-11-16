"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const HeroBtns = () => {
  const router = useRouter();
  return (
    <>
      <Button
        className="self-stretch md:self-start"
        onClick={() => router.push("/sign-in")}
      >
        Get started
      </Button>
      <Button
        className="self-stretch md:self-start"
        onClick={() => router.push("/threads")}
        variant={"secondary"}
      >
        Threads
      </Button>
    </>
  );
};

export default HeroBtns;
