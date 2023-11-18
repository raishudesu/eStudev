import Community from "@/components/home/Community";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <Hero />
      <Features />
      <Community />
    </section>
  );
}
