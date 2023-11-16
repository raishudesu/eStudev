import { featureList } from "@/lib/data";
import FeatureCard from "./FeatureCard";
import { headingGradient } from "./Hero";

const Features = () => {
  return (
    <div className="pt-20 w-full max-w-screen-xl">
      <div className="flex flex-col text-center justify-center gap-3">
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
