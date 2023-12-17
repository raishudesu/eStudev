import { Settings } from "lucide-react";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Settings size={30} className="animate-spin text-yellow-500" />
      </div>
    </main>
  );
};

export default Loading;
