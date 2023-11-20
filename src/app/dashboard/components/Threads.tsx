"use client";

import { useQuery } from "@tanstack/react-query";
import { CardSkeletons } from "@/components/Skeletons";
import { getUserThreads } from "@/stores/threads";
import { TThread } from "@/types/types";
import ThreadCard from "./ThreadCard";

const Threads = ({ id }: { id: string }) => {
  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const data = await getUserThreads(id);
      return data;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {!isFetching && isSuccess ? (
        data?.userThreads.length !== 0 ? (
          data?.userThreads.map(
            (
              { id, title, category, content, authorName }: TThread,
              index: number
            ) => (
              <ThreadCard
                key={index}
                id={id}
                title={title}
                categories={category}
                content={content}
                authorName={authorName}
              />
            )
          )
        ) : (
          <>No threads yet.</>
        )
      ) : (
        <>
          <CardSkeletons />
          <CardSkeletons />
          <CardSkeletons />
        </>
      )}
    </>
  );
};

export default Threads;
