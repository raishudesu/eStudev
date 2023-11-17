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
import Link from "next/link";

type TThreadCard = {
  title: string;
  categories: string[];
  content: string;
};

const ThreadCard = ({ title, categories, content }: TThreadCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <Link href={"/threads/view"} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-7">
          Posted by John Doe 8hrs ago
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <Badge>{categories}</Badge>
        <p className="leading-7">{content}</p>
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

export default ThreadCard;
