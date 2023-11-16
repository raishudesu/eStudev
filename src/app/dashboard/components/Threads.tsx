import { threads } from "@/lib/data";
import ThreadCard from "./ThreadCard";

const Threads = () => {
  return (
    <div className="grid gap-6">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Your threads
      </h4>
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
