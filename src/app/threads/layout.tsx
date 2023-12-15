import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threads | eStudev",
};
const ThreadsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      {children}
    </section>
  );
};

export default ThreadsLayout;
