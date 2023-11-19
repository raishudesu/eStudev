"use client";

import { getThread } from "@/stores/threads";
import AuthorCard from "./components/AuthorCard";
import CommentArea from "./components/CommentArea";
import CommentSection from "./components/CommentSection";
import ViewThreadCard from "./components/ViewThreadCard";
import { useQuery } from "@tanstack/react-query";
import { CardSkeletons } from "@/components/Skeletons";

const ViewThread = ({ params }: { params: { id: string } }) => {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["thread"],
    queryFn: async () => {
      const data = await getThread(params.id);
      return data;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <div className="w-full max-w-screen-xl flex flex-col gap-6">
      <div className="mt-8 w-full flex flex-col-reverse lg:grid grid-cols-3 gap-6 items-start">
        <div className="w-full col-span-2 flex flex-col gap-6 ">
          {!isLoading && isSuccess ? (
            <ViewThreadCard
              title={data.thread[0].title}
              categories={data.thread[0].category}
              content={data.thread[0].content}
            />
          ) : (
            <CardSkeletons />
          )}
          <CommentArea />
          <CommentSection />
        </div>
        <AuthorCard />
      </div>
    </div>
  );
};

export default ViewThread;
