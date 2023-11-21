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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { threadSchema } from "@/lib/zod";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "@/lib/editor";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { filters } from "@/lib/data";
import { createThread } from "@/stores/threads";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { Info } from "lucide-react";

const ThreadForm = () => {
  const [editor, setEditor] = useState(true);
  const session = useSession();
  const router = useRouter();
  const user = session.data?.user;
  const { theme } = useTheme();
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const form = useForm<z.infer<typeof threadSchema>>({
    resolver: zodResolver(threadSchema),
    defaultValues: {
      title: "",
      // category: "",
      content: "",
      authorId: Number(user?.id),
      authorName: user?.username,
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

  async function onSubmit(values: z.infer<typeof threadSchema>) {
    try {
      const data = await createThread(
        values,
        user?.id as string,
        user?.username as string
      );

      if (data.ok) {
        toaster("Post", "Your thread can now be viewed", "default");
        form.reset();
        router.push("/threads");
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
  const handleQuillChange = useCallback(
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your thread title goes here"
                  {...field}
                  disabled={formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={formState.isSubmitting}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {filters
                    .filter((filter) => filter.value !== "all")
                    .map(({ item, value }, index) => (
                      <SelectItem key={index} value={value}>
                        {item}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center flex-wrap">
                <FormLabel>Content</FormLabel>
                <Button
                  variant={"ghost"}
                  type="button"
                  size={"sm"}
                  className="flex gap-1 items-center"
                  onClick={() => setEditor(!editor)}
                >
                  <Info size={15} />
                  Change editor to {editor ? "Text" : "Markdown"}
                </Button>
              </div>
              <FormControl>
                {editor ? (
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
                  <ReactQuill
                    formats={formats}
                    modules={modules}
                    theme="snow"
                    className="w-full"
                    value={getValues("content")}
                    onChange={handleQuillChange as () => string}
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
          Create
        </Button>
      </form>
    </Form>
  );
};

export default ThreadForm;
