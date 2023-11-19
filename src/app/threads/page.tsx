import Aside from "./components/Aside";
import Threads from "./components/Threads";

const ThreadsPage = () => {
  return (
    <div className="w-full max-w-screen-xl">
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Threads
      </h2>

      <div className="mt-8 w-full flex flex-col-reverse lg:grid grid-cols-3 gap-6 items-start">
        <Threads />
        <Aside />
      </div>
    </div>
  );
};

export default ThreadsPage;
