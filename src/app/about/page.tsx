import { Metadata } from "next";
import About from "./components/About";
import { Particles } from "@/components/Particles";

export const metadata: Metadata = {
  title: "About | Thinksync",
};

const AboutPage = () => {
  return (
    <section className="relative w-full mt-6 flex justify-center">
      <Particles className="absolute inset-0 -z-10 " />

      <About />
    </section>
  );
};

export default AboutPage;
