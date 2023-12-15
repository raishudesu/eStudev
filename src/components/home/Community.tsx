import Image from "next/image";
import rocket from "@/assets/rocket.svg";
import GlowTop from "@/assets/glow-top.svg";

const Community = () => {
  return (
    <div className="relative pt-20 pb-10 w-full max-w-screen-xl px-6">
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
      <div className="flex flex-col text-center items-center justify-center gap-3">
        <h2
          className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
        >
          Foster a Culture of Collaboration 🤝
        </h2>
        <p className="leading-7 text-md">
          Connect with fellow students, share your insights, and grow your
          skills in a collaborative space. Join us today and be part of
          something bigger.
        </p>
        <Image
          src={rocket}
          alt="rocket"
          className="w-full max-w-screen-sm pt-3"
        />
      </div>
    </div>
  );
};

export default Community;
