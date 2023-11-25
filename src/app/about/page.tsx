import { Metadata } from "next";
import About from "./components/About";

export const metadata: Metadata = {
  title: "About | Thinksync",
};

const AboutPage = () => {
  return (
    <section className="w-full mt-6 flex justify-center">
      <About />
    </section>
  );
};

export default AboutPage;
