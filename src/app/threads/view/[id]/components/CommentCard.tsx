import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import MDEditor from "@uiw/react-md-editor";
import { Reply, Star } from "lucide-react";
import { useTheme } from "next-themes";
import remarkGfm from "remark-gfm";
import DeleteComment from "./DeleteComment";
import { useSession } from "next-auth/react";
import { timeAgo } from "@/lib/utils";
import { TComments } from "@/types/types";

const CommentCard = ({
  id,
  authorName,
  content,
  authorId,
  createdAt,
}: TComments) => {
  const { theme } = useTheme();
  const session = useSession();
  const username = session?.data?.user.username;

  const getFirstChar = () => {
    return username?.charAt(0).toUpperCase();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>{getFirstChar()}</AvatarFallback>
          </Avatar>
          <small className="text-sm font-medium leading-none">
            {authorName}
          </small>
          <small className="text-xs text-muted-foreground font-medium leading-none">
            {timeAgo(createdAt)}
          </small>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="w-full">
          <div data-color-mode={theme}>
            <MDEditor.Markdown source={content} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap">
        <div className="flex gap-6">
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <Star />
            10
          </div>
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <Reply />
            Reply
          </div>
        </div>
        {authorId !== Number(session.data?.user.id) ? null : (
          <DeleteComment id={id} />
        )}
      </CardFooter>
    </Card>
  );
};

export default CommentCard;
