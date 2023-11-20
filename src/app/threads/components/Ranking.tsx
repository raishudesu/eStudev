import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Crown } from "lucide-react";

const ranking = ["John Doe", "Hackerman69", "YourAverageD3v2077"];

const Ranking = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <CardTitle>Top Contributors</CardTitle>
        <CardDescription className="flex flex-col">
          Showcase your collaboration skills by aiming to join our real-time
          ranking.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {ranking.map((user, index) => (
          <div key={index} className="flex items-center gap-1">
            <small className="flex items-center gap-1 text-sm font-medium leading-none">
              <Crown color="#FACC15" />
              {index + 1}
            </small>
            <div className="text-lg font-semibold">{user}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Ranking;
