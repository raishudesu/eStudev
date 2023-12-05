import { Loader } from "lucide-react";
import Image from "next/image";
import loading from "@/assets/loading.svg";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex justify-center items-center min-h-[80vh]">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Image src={loading} alt="loading-svg" className="h-64" />
        <Loader color="#FACC15" size={30} className="animate-spin" />
      </div>
    </main>
  );
};

export default Loading;
