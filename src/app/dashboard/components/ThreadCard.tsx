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
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import remarkGfm from "remark-gfm";
import { timeAgo } from "@/lib/utils";

const ThreadCard = ({
  id,
  title,
  category,
  content,
  authorName,
  authorId,
  createdAt,
}: TThread) => {
  const { theme } = useTheme();
  const session = useSession();
  const currUser = session.data?.user;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <Link href={`/threads/view/${id}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-7">
          Posted by {authorName} <br />
          <small className="text-xs text-muted-foreground font-medium leading-none">
            {timeAgo(createdAt)}
          </small>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <Badge className="capitalize">{category}</Badge>
        <div className="max-h-64 w-full overflow-x-auto overflow-y-hidden ">
          <div data-color-mode={theme}>
            <MDEditor.Markdown
              source={content}
              remarkPlugins={[remarkGfm]}
              // rehypePlugins={[rehypeRaw]}
            />
          </div>
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
