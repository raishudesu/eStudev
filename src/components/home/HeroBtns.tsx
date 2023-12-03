"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const HeroBtns = () => {
  const router = useRouter();
  return (
    <>
      <Button
        className="justify-self-stretch md:justify-self-end "
        onClick={() => router.push("/sign-in")}
      >
        Get started
      </Button>
      <Button
        className="justify-items-stretch md:justify-self-start"
        onClick={() => router.push("/threads")}
        variant={"secondary"}
      >
        Threads
      </Button>
    </>
  );
};

export default HeroBtns;
