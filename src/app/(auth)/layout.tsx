import Image from "next/image";
import welcome from "@/assets/welcome.svg";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-10 lg:mt-20">
      <div className="w-full max-w-screen-xl grid md:grid-cols-2 justify-items-center items-center">
        <Image
          src={welcome}
          alt="welcome"
          className="w-full max-w-xs lg:max-w-xl"
        />
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
