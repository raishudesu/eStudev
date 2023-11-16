import Aside from "./components/Aside";
import Threads from "./components/Threads";

const ThreadsPage = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <div className="w-full max-w-screen-xl">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Threads
        </h2>

        <div className="mt-8 w-full flex flex-col-reverse md:grid grid-cols-2 gap-6 items-start">
          <Threads />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default ThreadsPage;
