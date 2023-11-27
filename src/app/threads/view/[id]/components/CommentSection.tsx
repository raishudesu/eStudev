import { Separator } from "@/components/ui/separator";
import CommentCard from "./CommentCard";
import { z } from "zod";
import { commentSchema } from "@/lib/zod";
import { DateTime } from "luxon";

// const sampleComments = [
//   {
//     author: "JaneDoe89",
//     content:
//       "I absolutely love how arrow functions have simplified my code! They make it much cleaner and easier to read.",
//   },
//   {
//     author: "CodeMaster123",
//     content:
//       "The destructuring feature is a game-changer when working with complex data structures. It saves me so much time!",
//   },
//   {
//     author: "TechGeek77",
//     content:
//       "ES6 classes have made object-oriented programming in JavaScript much more intuitive. I find them really useful for building robust applications.",
//   },
//   {
//     author: "JSNinja22",
//     content:
//       "Promises have transformed the way I handle asynchronous tasks. No more callback hell, just cleaner and more manageable code!",
//   },
// ];

type TComments = {
  id: number;
  authorId: number;
  threadId: number;
  authorName: string;
  content: string;
  createdAt: DateTime;
};

const CommentSection = ({ comments }: { comments: TComments[] }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {comments.length === 0 ? (
        <p className="pl-6 lg:pl-0">No comments yet.</p>
      ) : (
        comments.map(
          (
            { id, authorId, threadId, authorName, content, createdAt },
            index
          ) => (
            <CommentCard
              key={index}
              id={id as number}
              author={authorName}
              authorId={authorId}
              content={content}
              createdAt={createdAt}
            />
          )
        )
      )}
    </div>
  );
};

export default CommentSection;
