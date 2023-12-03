"use client";
import ThreadCard from "@/app/dashboard/components/ThreadCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getThreads, searchThreads } from "@/stores/threads";
import { useQuery } from "@tanstack/react-query";
import { TThread } from "@/types/types";
import { CardSkeletons } from "@/components/Skeletons";
import Filter from "@/app/threads/components/Filter";

const Threads = ({ query }: { query: string }) => {
  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["searchThreads"],
    queryFn: () => searchThreads(query),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full flex flex-col gap-6 col-span-2">
      <div className="w-full flex justify-between items-center flex-wrap">
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
      <div className="w-full flex flex-col gap-6">
        <Separator />
        {!isFetching && isSuccess ? (
          data?.threads.length !== 0 ? (
            data?.threads.map(
              (
                {
                  id,
                  title,
                  category,
                  content,
                  authorName,
                  authorId,
                  createdAt,
                }: TThread,
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
                  createdAt={createdAt}
                />
              )
            )
          ) : (
            <>No results.</>
          )
        ) : (
          <>
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
          </>
        )}
      </div>
    </div>
  );
};

export default Threads;
