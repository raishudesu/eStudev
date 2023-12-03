"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeCardBtns = () => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.push("/dashboard/create-thread")}
        className="w-full"
      >
        Create thread
      </Button>
      <Button
        onClick={() => router.push("/dashboard")}
        className="w-full "
        variant={"secondary"}
      >
        Dashboard
      </Button>
    </>
  );
};

export default HomeCardBtns;
