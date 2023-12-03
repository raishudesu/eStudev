import { Metadata } from "next";
import Threads from "./components/Threads";

export const metadata: Metadata = {
  title: "Search | Thinksync",
};

const SearchPage = ({ params }: { params: { query: string } }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 pb-6">
      <div className="w-full max-w-screen-xl mt-6">
        <h2 className="pl-6 lg:pl-0 mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Search results for {params.query.trim().replaceAll("%20", " ")}
        </h2>

        <div className="mt-8 w-full flex flex-col gap-6 items-start">
          <Threads query={params.query.trim().replaceAll("%20", " ")} />
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
