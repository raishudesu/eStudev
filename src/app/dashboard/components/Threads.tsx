import { threads } from "@/lib/data";
import ThreadCard from "./ThreadCard";
import Filter from "@/app/threads/components/Filter";

const Threads = () => {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center flex-wrap">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Your threads
        </h4>
        <Filter />
      </div>
      {threads.map(({ title, categories, content }, index) => (
        <ThreadCard
          key={index}
          title={title}
          categories={categories}
          content={content}
        />
      ))}
    </div>
  );
};

export default Threads;
