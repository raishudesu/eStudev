"use client";
import { useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ThreadMd = ({ content }: { content: string }) => {
  const syntaxHighlighterRef = useRef<SyntaxHighlighter | null>(null);
  return (
    <Markdown
      className={"whitespace-pre-wrap break-all w-full"}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={atomDark}
              language={match[1]}
              PreTag="div"
              ref={(node) => (syntaxHighlighterRef.current = node)}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default ThreadMd;
