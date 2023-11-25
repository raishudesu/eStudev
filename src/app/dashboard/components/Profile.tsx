"use client";

import maleAvatar from "@/assets/male-avatar.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileBtns from "./ProfileBtns";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileSkeletons, TextSkeletons } from "@/components/Skeletons";

const Profile = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;

  const displayCard = () => {
    if (
      pathname === "/dashboard/create-thread" ||
      pathname.startsWith("/dashboard/edit-thread/")
    )
      return "hidden lg:block";
    return null;
  };
  return (
    <div className={`${displayCard()} w-full flex flex-col gap-6`}>
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-6">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Your Profile
          </h4>
          {user ? (
            <Image
              src={maleAvatar}
              alt="male-avatar"
              className="self-center max-w-[10rem]"
            />
          ) : (
            <Skeleton className="h-[8rem] w-[8rem] rounded-full self-center" />
          )}
          {user ? (
            <CardDescription className="flex flex-col">
              <span className="text-foreground scroll-m-20 text-2xl font-semibold tracking-tight">
                {user.username}
              </span>
              <small className=" text-sm font-medium leading-none">
                {user.email}
              </small>
            </CardDescription>
          ) : (
            <ProfileSkeletons />
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {user ? (
            <>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {user.bio ? user.bio : <>Add your bio</>}
                </p>
              </div>
              {user?.links?.map((link, index) => (
                <Link key={index} href={""} className="text-blue-500">
                  {link}
                </Link>
              ))}
              <div className="flex flex-col md:flex-row flex-wrap gap-3">
                <ProfileBtns />
              </div>
              <div className="flex gap-6">
                <small className=" text-sm font-medium leading-none">
                  1,000 Followers
                </small>
                <small className=" text-sm font-medium leading-none">
                  10 Following
                </small>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  698 contributions in the last year
                </h4>
                <small className=" text-sm font-medium leading-none">
                  Contributed to various threads accross the platform.
                </small>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Contribution activity
                </h4>
                <small className=" text-sm font-medium leading-none">
                  Created 65 threads, 45 comments, 68 replies, and 10 resources.
                </small>
              </div>
            </>
          ) : (
            <>
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index}>
                  <TextSkeletons />
                </div>
              ))}
            </>
          )}
        </CardContent>
        <CardFooter className="flex gap-6"></CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
