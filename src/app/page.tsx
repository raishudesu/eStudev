import Community from "@/components/home/Community";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/threads");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <Hero />
      <Features />
      <Community />
    </section>
  );
}
