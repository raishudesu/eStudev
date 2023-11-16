import Image from "next/image";
import rocket from "@/assets/rocket.svg";

const Community = () => {
  return (
    <div className="pt-20 w-full max-w-screen-xl">
      <div className="flex flex-col text-center items-center justify-center gap-3">
        <h2
          className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
        >
          Foster a culture of collaboration
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
