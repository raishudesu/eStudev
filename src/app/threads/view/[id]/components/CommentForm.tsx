"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useCallback, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { Info } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import { createComment } from "@/stores/comments";
import { useQueryClient } from "@tanstack/react-query";

const commentFormSchema = z.object({
  content: z.string().min(2, "Comment must be at least 2 characters"),
});

const CommentForm = ({
  threadId,
  authorName,
}: {
  threadId: number;
  authorName: string;
}) => {
  const queryClient = useQueryClient();
  const [editor, setEditor] = useState(true);
  const session = useSession();
  const user = session.data?.user;
  const { theme } = useTheme();

  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: "",
    },
  });

  const { setValue, formState, getValues } = form;

  const toaster = (
    title: string,
    msg: string,
    type: "default" | "destructive" | null | undefined
  ) => {
    toast({
      variant: type,
      title: title,
      description: msg,
    });
  };

  async function onSubmit(values: z.infer<typeof commentFormSchema>) {
    try {
      const data = await createComment(
        Number(user?.id),
        threadId,
        authorName,
        values.content
      );

      if (data.ok) {
        toaster("Comment posted", "Your comment can now be viewed", "default");
        form.reset();
        queryClient.invalidateQueries({ queryKey: ["thread"] });
      } else {
        toaster("Something went wrong.", data.message, "destructive");
      }
    } catch (error) {
      toaster("Something went wrong.", error as string, "destructive");
    }
  }

  const handleMdChange = useCallback(
    (
      value?: string,
      event?: React.ChangeEvent<HTMLTextAreaElement>,
      state?: ContextStore
    ) => {
      setValue("content", value as string); // Update the 'content' value in the form
    },
    [setValue]
  );
  const handleTextChange = useCallback(
    (content: string) => {
      setValue("content", content); // Update the 'content' value in the form
    },
    [setValue]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center flex-wrap">
                <FormLabel>Your comment</FormLabel>
                <Button
                  variant={"ghost"}
                  type="button"
                  size={"sm"}
                  className="flex gap-1 items-center"
                  onClick={() => setEditor(!editor)}
                >
                  <Info size={15} />
                  Change editor to {!editor ? "Text" : "Markdown"}
                </Button>
              </div>
              <FormControl>
                {!editor ? (
                  <div data-color-mode={theme} className="list-disc">
                    <MDEditor
                      value={getValues("content")}
                      onChange={handleMdChange}
                      className="list-disc"
                      previewOptions={{
                        rehypePlugins: [[rehypeSanitize, rehypeRaw]],
                      }}
                    />
                  </div>
                ) : (
                  <Editor
                    disabled={formState.isSubmitting}
                    apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
                    init={{
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists wordcount autoresize",
                      toolbar:
                        "undo redo | blocks fontsize | bold italic underline strikethrough codesample | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                      codesample_languages: [
                        { text: "HTML/XML", value: "markup" },
                        { text: "JavaScript", value: "javascript" },
                        { text: "CSS", value: "css" },
                        { text: "PHP", value: "php" },
                        { text: "Ruby", value: "ruby" },
                        { text: "Python", value: "python" },
                        { text: "Java", value: "java" },
                        { text: "C", value: "c" },
                        { text: "C#", value: "csharp" },
                        { text: "C++", value: "cpp" },
                      ],

                      menubar: false,
                    }}
                    value={getValues("content")}
                    onEditorChange={handleTextChange}
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="md:self-start"
          disabled={formState.isSubmitting}
        >
          Comment
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
