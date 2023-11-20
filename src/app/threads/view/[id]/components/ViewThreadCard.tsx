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
import ActionBtns from "@/app/dashboard/components/ActionBtns";
import { useSession } from "next-auth/react";

const ViewThreadCard = ({
  title,
  authorName,
  category,
  content,
  authorId,
}: TThread) => {
  const session = useSession();

  const currUser = session.data?.user;
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
        {/* <ThreadMd content={content} /> */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
            <ActionBtns />
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default ViewThreadCard;
