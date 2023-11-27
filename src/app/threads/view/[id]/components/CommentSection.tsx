import { TComments } from "@/types/types";
import CommentCard from "./CommentCard";

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
              authorName={authorName}
              authorId={authorId}
              content={content}
              createdAt={createdAt}
              threadId={threadId}
            />
          )
        )
      )}
    </div>
  );
};

export default CommentSection;
