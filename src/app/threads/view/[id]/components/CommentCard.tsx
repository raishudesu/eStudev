import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Reply, Star } from "lucide-react";

const CommentCard = ({
  author,
  content,
}: {
  author: string;
  content: string;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <small className="text-sm font-medium leading-none">{author}</small>
          <small className="text-xs text-muted-foreground font-medium leading-none">
            Posted an hour ago
          </small>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">{content}</CardContent>
      <CardFooter className="flex gap-6">
        <div className="flex items-center gap-1 text-sm font-medium leading-none">
          <Star />
          10
        </div>
        <div className="flex items-center gap-1 text-sm font-medium leading-none">
          <Reply />
          Reply
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommentCard;
