import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFeatureCard } from "@/types/types";
import maze from "@/assets/maze.svg";
import Image from "next/image";

const FeatureCard = ({ icon, characteristic, description }: TFeatureCard) => {
  return (
    <Card className="relative bg-transparent shadow-md hover:shadow-[#FACC15] transition ease-in-out duration-300 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 -z-10">
          <Image src={maze} className="opacity-20 dark:opacity-50" alt="maze" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className="text-xl">{icon}</span>
          <span>{characteristic}</span>
        </CardTitle>
        <CardDescription className="leading-7">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
