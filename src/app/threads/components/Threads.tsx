import ThreadCard from "@/app/dashboard/components/ThreadCard";
import { Separator } from "@/components/ui/separator";
import { threads } from "@/lib/data";
import Filter from "./Filter";
import { Button } from "@/components/ui/button";

const Threads = () => {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex gap-3">
          <Button variant={"ghost"} size={"sm"}>
            All threads
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Following
          </Button>
        </div>
        <Filter />
      </div>
      <Separator />
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
