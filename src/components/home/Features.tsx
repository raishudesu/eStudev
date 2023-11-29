import { featureList } from "@/lib/data";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import GlowTop from "@/assets/glow-top.svg";
const Features = () => {
  return (
    <div className="relative py-20 w-full max-w-screen-xl">
      <div
        className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
          <Image
            src={GlowTop}
            className="max-w-none ml-24 opacity-10 dark:opacity-30"
            width={1404}
            height={658}
            alt="Features Illustration"
          />
        </div>
      </div>
      <div className="flex flex-col text-center justify-center gap-3 px-6">
        <h2
          className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
        >
          Centralized hub for tech community engagement
        </h2>
        <p className="leading-7 text-md">
          Unleash the power of community-driven learning to advance your tech
          skills and career goals.
        </p>
      </div>
      <div className="pt-20 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {featureList.map(({ icon, characteristic, description }, index) => (
          <FeatureCard
            key={index}
            icon={icon}
            characteristic={characteristic}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
