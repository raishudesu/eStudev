"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeCardBtns = () => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.push("/threads/create")}
        className="self-stretch md:self-start"
      >
        Create thread
      </Button>
      <Button
        onClick={() => router.push("/dashboard")}
        className="self-stretch md:self-start"
        variant={"secondary"}
      >
        Dashboard
      </Button>
    </>
  );
};

export default HomeCardBtns;
