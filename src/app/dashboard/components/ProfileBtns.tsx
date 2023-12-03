import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ProfileBtns = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/dashboard/create-thread")
    return (
      <Button
        onClick={() => router.push("/dashboard")}
        className="self-stretch md:self-start"
      >
        My threads
      </Button>
    );
  return (
    <>
      <div className="flex gap-3">
        <Button
          onClick={() => router.push("/dashboard/create-thread")}
          className="w-full"
        >
          Create thread
        </Button>
        <Button variant={"secondary"} className="w-full">
          Edit profile
        </Button>
      </div>
      <Button variant={"ghost"} className="self-start">
        <Share2 size={15} />
      </Button>
    </>
  );
};

export default ProfileBtns;
