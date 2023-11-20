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
import ActionBtns from "./ActionBtns";
import { TThread } from "@/types/types";

import { useSession } from "next-auth/react";

const ThreadCard = ({
  id,
  title,
  category,
  content,
  authorName,
  authorId,
}: TThread) => {
  const session = useSession();
  const currUser = session.data?.user;
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
        <Badge className="capitalize">{category}</Badge>

        <div className="max-h-32 overflow-hidden">
          {/* <ThreadMd content={content} /> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <Link
          href={`/threads/view/${id}`}
          className="text-blue-500 text-sm hover:underline"
        >
          See more
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <Star />
            10
          </div>
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <MessageCircle />5
          </div>

          <Share2 />
          <BookMarked />
        </div>
        {Number(currUser?.id) === authorId ? (
          <div className="flex gap-3">
            <ActionBtns id={id} />
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default ThreadCard;
