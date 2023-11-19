"use client";

import ThreadCard from "./components/ThreadCard";
import Filter from "../threads/components/Filter";
import { useQuery } from "@tanstack/react-query";
import { TextSkeletons } from "@/components/Skeletons";
import { getThreads } from "@/stores/threads";
import { TThread } from "@/types/types";

const Threads = () => {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
    refetchOnWindowFocus: false,
  });

  return (
    <div className=" w-full col-span-2 grid gap-6">
      <div className="w-full flex justify-between items-center flex-wrap">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Your threads
        </h4>
        <Filter />
      </div>
      {!isLoading ? (
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
