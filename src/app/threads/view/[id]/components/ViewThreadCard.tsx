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
import { TThread } from "@/types/types";
import ActionBtns from "@/app/dashboard/components/ActionBtns";
import { useSession } from "next-auth/react";
import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import remarkGfm from "remark-gfm";
import { timeAgo } from "@/lib/utils";

const ViewThreadCard = ({
  id,
  title,
  authorName,
  category,
  content,
  authorId,
  createdAt,
}: TThread) => {
  const session = useSession();
  const { theme } = useTheme();
  const currUser = session.data?.user;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="leading-7">
          @{authorName}
          <br />
          <small className="text-xs text-muted-foreground font-medium leading-none">
            {timeAgo(createdAt)}
          </small>
        </CardDescription>
        <Badge className="capitalize self-start">{category}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <div className="w-full overflow-x-auto">
          <div data-color-mode={theme}>
            <MDEditor.Markdown source={content} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <Star size={20} />
          </div>
          <div className="flex items-center gap-1 text-sm font-medium leading-none">
            <MessageCircle size={20} />
          </div>

          <Share2 size={20} />
          <BookMarked size={20} />
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

export default ViewThreadCard;
