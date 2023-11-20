import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Share2, MessageCircle, BookMarked } from "lucide-react";
import ThreadMd from "./ThreadMd";
import { TThread } from "@/types/types";

// type TThreadCard = {
//   title: string;
//   categories: string[];
//   content: string;
// };

const ViewThreadCard = ({ title, authorName, category, content }: TThread) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="leading-7">
          Posted by {authorName}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <Badge className="capitalize">{category}</Badge>
        <ThreadMd content={content} />
      </CardContent>
      <CardFooter className="flex gap-6">
        <div className="flex items-center gap-1 text-sm font-medium leading-none">
          <Star />
          10
        </div>
        <div className="flex items-center gap-1 text-sm font-medium leading-none">
          <MessageCircle />5
        </div>

        <Share2 />
        <BookMarked />
      </CardFooter>
    </Card>
  );
};

export default ViewThreadCard;
