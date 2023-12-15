import { getServerSession } from "next-auth";
import Filter from "../threads/components/Filter";
import { authOptions } from "@/lib/auth";
import Threads from "./components/Threads";
import { CardSkeletons } from "@/components/Skeletons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dasboard | eStudev",
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className=" w-full col-span-2 flex flex-col items-start gap-6 pb-6">
      <div className="w-full flex justify-between items-center flex-wrap">
        <h4 className="pl-6 lg:pl-0 scroll-m-20 text-xl font-semibold tracking-tight">
          Your threads
        </h4>
        <Filter />
      </div>
      {user ? <Threads id={user?.id} /> : <CardSkeletons />}
    </div>
  );
};

export default DashboardPage;
