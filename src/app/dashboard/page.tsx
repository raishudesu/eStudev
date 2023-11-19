"use client";

import ThreadCard from "./components/ThreadCard";
import Filter from "../threads/components/Filter";
import { useQuery } from "@tanstack/react-query";
import { TextSkeletons } from "@/components/Skeletons";

type TThread = {
  title: string;
  category: string[];
  content: string;
  authorName: string;
};

const Threads = () => {
  const getThreads = async () => {
    try {
      const res = await fetch("api/threads");

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full grid gap-6 col-span-2">
      <div className="flex justify-between items-center flex-wrap">
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
