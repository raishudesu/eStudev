import AuthorCard from "./components/AuthorCard";
import CommentArea from "./components/CommentArea";
import CommentSection from "./components/CommentSection";
import ThreadMd from "./components/ThreadMd";
import ViewThreadCard from "./components/ViewThreadCard";

const sample = {
  title: "Introduction to JavaScript ES6 Features",
  categories: ["Discussion"],
  content: ``,
};

const ViewThread = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col gap-6">
      <div className="mt-8 w-full flex flex-col-reverse lg:grid grid-cols-3 gap-6 items-start">
        <div className="w-full col-span-2 flex flex-col gap-6 ">
          <ViewThreadCard
            title={sample.title}
            categories={sample.categories}
            content={sample.content}
          />
          <CommentArea />
          <CommentSection />
        </div>
        <AuthorCard />
      </div>
    </div>
  );
};

export default ViewThread;
