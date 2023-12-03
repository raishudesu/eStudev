import HeroBtns from "./HeroBtns";
import { Particles } from "../Particles";

export const headingGradient =
  "text-transparent bg-clip-text bg-gradient-to-b from-[#242424] via-gray-600 to-gray-700 dark:from-gray-100 dark:to-gray-400 pb-2";

const Hero = () => {
  return (
    <div className="relative pt-10 md:py-24 w-full max-w-screen-xl grid justify-items-center gap-6">
      <Particles className="absolute inset-0 -z-10 " />
      <div className="grid gap-6 text-center px-6">
        <h1
          className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl ${headingGradient}`}
        >
          Empowering Students Through Community-Based Learning
        </h1>
        <p className="leading-7">
          Discover a supportive network of peers and professionals to elevate
          your tech skills and career aspirations.
        </p>
        <div className="w-full grid grid-cols-2 gap-3">
          <HeroBtns />
        </div>
      </div>
    </div>
  );
};

export default Hero;
