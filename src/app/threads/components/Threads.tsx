"use client";
import ThreadCard from "@/app/dashboard/components/ThreadCard";
import { Separator } from "@/components/ui/separator";
import Filter from "./Filter";
import { Button } from "@/components/ui/button";
import { getThreads } from "@/stores/threads";
import { useQuery } from "@tanstack/react-query";
import { TThread } from "@/types/types";
import { CardSkeletons } from "@/components/Skeletons";

const Threads = () => {
  const { isFetching, isSuccess, data } = useQuery({
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
      {!isFetching && isSuccess ? (
        data?.threads.map(
          (
            { id, title, category, content, authorName, authorId }: TThread,
            index: number
          ) => (
            <ThreadCard
              id={id}
              key={index}
              title={title}
              category={category}
              content={content}
              authorName={authorName}
              authorId={authorId}
            />
          )
        )
      ) : (
        <>
          <CardSkeletons />
          <CardSkeletons />
          <CardSkeletons />
        </>
      )}
    </div>
  );
};

export default Threads;
