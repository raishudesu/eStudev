import Image from "next/image";
import rocket from "@/assets/rocket.svg";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import FormLabel from "./components/FormLabel";
import { Code2 } from "lucide-react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/threads");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <div className="py-10 md:py-0 w-full max-w-screen-xl rounded-lg overflow-hidden border shadow-md">
        <div className="container relative min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-foreground dark:border-r lg:flex">
            <div className="absolute inset-0 bg-card" />
            <div className="relative z-20 flex items-center text-lg font-medium gap-1">
              <Code2 className="text-yellow-500" />
              <span>
                eStu<span className="text-yellow-500">dev</span>
              </span>
            </div>
            <div className="relative z-20 pt-20 flex items-center text-lg font-medium gap-1">
              <Image src={rocket} alt="rocket" className="" />
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;We&apos;re all about teamwork for student developers.
                  We keep it simple: clear communication means better projects
                  and more fun. Join us and let&apos;s build awesome stuff
                  together!&rdquo;
                </p>
                <footer className="text-sm">eStudev Team</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className=" mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <FormLabel />
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
