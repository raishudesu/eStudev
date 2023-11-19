import ThreadMd from "@/app/threads/view/[id]/components/ThreadMd";
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
  id: string;
  title: string;
  categories: string[];
  content: string;
  authorName: string;
};

const ThreadCard = ({
  id,
  title,
  categories,
  content,
  authorName,
}: TThreadCard) => {
  return (
    <Card className="w-full border-2 overflow-x-auto">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <Link href={`/threads/view/${id}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-7">
          Posted by {authorName}
        </CardDescription>
      </CardHeader>
      <CardContent className=" w-full flex flex-col gap-3 items-start">
        <Badge>{categories}</Badge>

        <div className="max-h-32 overflow-hidden">
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
