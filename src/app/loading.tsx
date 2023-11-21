import { Loader } from "lucide-react";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex justify-center items-center min-h-[80vh]">
      <div className="animate-spin">
        <Loader color="#FACC15" size={30} />
      </div>
    </main>
  );
};

export default Loading;
