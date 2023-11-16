import ThreadCard from "./ThreadCard";

const threads = [
  {
    title: "Introduction to JavaScript ES6 Features",
    categories: ["Discussion"],
    content:
      "Let's discuss the most useful ES6 features and how they've changed the way we write JavaScript code. Share your favorite features and examples!",
  },
  {
    title: "Portfolio Showcase - Web Development Projects",
    categories: ["Project Showcase"],
    content:
      "This thread is dedicated to showcasing your latest web development projects! Share your portfolio links, discuss design choices, and gather feedback.",
  },
  {
    title: "Help with React Hooks",
    categories: ["Question"],
    content:
      "I'm having trouble understanding the useEffect hook in React. Can someone provide a clear explanation with examples?",
  },
  {
    title: "Useful Frontend Development Resources",
    categories: ["Resource"],
    content:
      "Let's compile a list of helpful frontend development resources - articles, tutorials, tools, and frameworks that have been valuable in our projects.",
  },
  {
    title: "Venting Zone - Coding Frustrations",
    categories: ["Rant"],
    content:
      "Share your coding frustrations here! Whether it's about debugging, dealing with clients, or the latest tech trends - this is the place to let it out.",
  },
  {
    title: "Bug in React Component Rendering",
    categories: ["Problem"],
    content:
      "I've encountered a strange bug in my React component rendering. Need assistance in troubleshooting and finding a solution.",
  },
];

const Threads = () => {
  return (
    <div className="grid gap-6">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Your threads
      </h4>
      {threads.map(({ title, categories, content }, index) => (
        <ThreadCard
          key={index}
          title={title}
          categories={categories}
          content={content}
        />
      ))}
    </div>
  );
};

export default Threads;
