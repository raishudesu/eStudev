import { ReactNode } from "react";
import Profile from "./components/Profile";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <div className="w-full max-w-screen-xl">
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Dashboard
        </h2>

        <div className="mt-8 w-full flex flex-col lg:grid grid-cols-3 gap-6">
          {children}
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
