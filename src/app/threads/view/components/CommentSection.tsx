import { Separator } from "@/components/ui/separator";
import CommentCard from "./CommentCard";

const sampleComments = [
  {
    author: "JaneDoe89",
    content:
      "I absolutely love how arrow functions have simplified my code! They make it much cleaner and easier to read.",
  },
  {
    author: "CodeMaster123",
    content:
      "The destructuring feature is a game-changer when working with complex data structures. It saves me so much time!",
  },
  {
    author: "TechGeek77",
    content:
      "ES6 classes have made object-oriented programming in JavaScript much more intuitive. I find them really useful for building robust applications.",
  },
  {
    author: "JSNinja22",
    content:
      "Promises have transformed the way I handle asynchronous tasks. No more callback hell, just cleaner and more manageable code!",
  },
];

const CommentSection = () => {
  return (
    <>
      {sampleComments.map(({ author, content }, index) => (
        <CommentCard key={index} author={author} content={content} />
      ))}
    </>
  );
};

export default CommentSection;
