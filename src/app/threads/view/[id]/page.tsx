"use client";

import { getThread } from "@/stores/threads";
import AuthorCard from "./components/AuthorCard";
import CommentArea from "./components/CommentArea";
import CommentSection from "./components/CommentSection";
import ViewThreadCard from "./components/ViewThreadCard";
import { useQuery } from "@tanstack/react-query";
import { CardSkeletons } from "@/components/Skeletons";
import { useRouter } from "next/navigation";

const ViewThread = ({ params }: { params: { id: string } }) => {
  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["thread"],
    queryFn: async () => {
      const data = await getThread(params.id);
      console.log(data);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="w-full max-w-screen-xl flex flex-col gap-6">
      <div className="mt-8 w-full flex flex-col lg:grid grid-cols-3 gap-6 items-start">
        {!isFetching && isSuccess ? (
          <>
            <div className="w-full col-span-2 flex flex-col gap-6 ">
              <ViewThreadCard
                id={data.thread.id}
                title={data.thread.title}
                category={data.thread.category}
                content={data.thread.content}
                authorName={data.thread.author.username}
              />
              <CommentArea />
              <CommentSection />
            </div>
            <AuthorCard author={data.thread.author} />
          </>
        ) : (
          <CardSkeletons />
        )}
      </div>
    </div>
  );
};

export default ViewThread;
