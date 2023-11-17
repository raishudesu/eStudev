import AuthorCard from "./components/AuthorCard";
import CommentArea from "./components/CommentArea";
import CommentSection from "./components/CommentSection";
import ThreadMd from "./components/ThreadMd";
import ViewThreadCard from "./components/ViewThreadCard";

const sample = {
  title: "Introduction to JavaScript ES6 Features",
  categories: ["Discussion"],
  content: `
**Introduction to JavaScript ES6 Features**

With the advent of ES6, JavaScript underwent significant enhancements, introducing numerous features that revolutionized the way we write code.

Some of the most impactful ES6 features include:

- **Arrow Functions**: Simplified syntax for defining functions, making code more concise.
- **Template Literals**: A more flexible way to handle strings, allowing for variable interpolation.
- **Destructuring**: Enables extracting values from arrays or objects more conveniently.
- **let** and **const**: Block-scoped variables, reducing the use of 'var' and offering better variable handling.
- **Classes**: A new syntax for creating objects and implementing inheritance.
- **Promises**: Improved handling of asynchronous operations.

Let's delve into these features! Share your thoughts, experiences, and any ES6 examples you find particularly interesting or useful.

Here's an example of an arrow function:
\`\`\`javascript
// Arrow function syntax
const multiply = (a, b) => a * b;

// Usage
console.log(multiply(5, 10)); // Output: 50
\`\`\`

Feel free to contribute your code snippets or discuss how these features have impacted your development process!
  `,
};

const ViewThread = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col gap-6">
      <div className="mt-8 w-full flex flex-col-reverse lg:grid grid-cols-3 gap-6 items-start">
        <div className="w-full col-span-2 flex flex-col gap-6 ">
          <ViewThreadCard
            title={sample.title}
            categories={sample.categories}
            content={sample.content}
          />
          <CommentArea />
          <CommentSection />
        </div>
        <AuthorCard />
      </div>
    </div>
  );
};

export default ViewThread;
