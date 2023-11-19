"use client";
import ThreadCard from "@/app/dashboard/components/ThreadCard";
import { Separator } from "@/components/ui/separator";
import Filter from "./Filter";
import { Button } from "@/components/ui/button";
import { getThreads } from "@/stores/threads";
import { useQuery } from "@tanstack/react-query";
import { TThread } from "@/types/types";
import { TextSkeletons } from "@/components/Skeletons";

const Threads = () => {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="grid gap-6 col-span-2">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex gap-3">
          <Button variant={"ghost"} size={"sm"}>
            All threads
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Following
          </Button>
        </div>
        <Filter />
      </div>
      <Separator />
      {!isLoading && isSuccess ? (
        data.threads.map(
          (
            { title, category, content, authorName }: TThread,
            index: number
          ) => (
            <ThreadCard
              key={index}
              title={title}
              categories={category}
              content={content}
              authorName={authorName}
            />
          )
        )
      ) : (
        <TextSkeletons />
      )}
    </div>
  );
};

export default Threads;
