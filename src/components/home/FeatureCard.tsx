import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFeatureCard } from "@/types/types";
import { headingGradient } from "./Hero";

const FeatureCard = ({ icon, characteristic, description }: TFeatureCard) => {
  return (
    <Card className="shadow-md hover:shadow-[#FACC15] transition ease-in-out duration-300">
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
