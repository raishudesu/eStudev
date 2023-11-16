import { Button } from "../ui/button";

export const headingGradient =
  "text-transparent bg-clip-text bg-gradient-to-b from-[#242424] via-gray-600 to-gray-700 dark:from-gray-100 dark:to-gray-400 pb-2";

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 w-full max-w-screen-xl grid justify-items-center gap-6">
      <div className="grid gap-6 text-center">
        <h1
          className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl ${headingGradient}`}
        >
          Empowering Students Through Community-Based Learning
        </h1>
        <p className="leading-7">
          Discover a supportive network of peers and professionals to elevate
          your tech skills and career aspirations.
        </p>
        <div className="place-self-center flex gap-3">
          <Button>Get started</Button>
          <Button variant={"secondary"}>Threads</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
