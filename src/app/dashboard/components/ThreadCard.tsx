import ThreadMd from "@/app/threads/view/components/ThreadMd";
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
  authorName: string;
};

const ThreadCard = ({
  title,
  categories,
  content,
  authorName,
}: TThreadCard) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <Link href={"/threads/view"} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-7">
          Posted by {authorName} 8hrs ago
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <Badge>{categories}</Badge>
        {/* <p className="leading-7">{content}</p> */}

        <div className="max-h-96 overflow-hidden">
          <ThreadMd content={content} />
        </div>
        <Link
          href={"/threads/view"}
          className="text-blue-500 text-sm hover:underline"
        >
          See more
        </Link>
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
