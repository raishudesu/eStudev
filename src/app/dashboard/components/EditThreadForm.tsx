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

import { threadSchema, updateThreadSchema } from "@/lib/zod";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import "react-quill/dist/quill.snow.css";
import { formats, modules } from "@/lib/editor";
import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { filters } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { getThread } from "@/stores/threads";
import { CardSkeletons } from "@/components/Skeletons";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { Info } from "lucide-react";

const EditThreadForm = ({ id }: { id: number }) => {
  const [editor, setEditor] = useState(true);
  const router = useRouter();
  const { theme } = useTheme();
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["thread"],
    queryFn: async () => {
      const data = await getThread(id);
      console.log(data);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  const form = useForm<z.infer<typeof updateThreadSchema>>({
    resolver: zodResolver(updateThreadSchema),
    defaultValues: {
      title: "",
      //   category: "",
      content: "",
    },
  });
  const { setValue, getValues, formState } = form;

  useEffect(() => {
    if (isSuccess && data.ok) {
      setValue("title", data.thread.title || "");
      setValue("category", data.thread.category || "");
      setValue("content", data.thread.content || "");
    }
  }, [isSuccess, data, form, setValue]);

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

  async function onSubmit(values: z.infer<typeof updateThreadSchema>) {
    try {
      const res = await fetch(`/api/thread/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          category: values.category,
          content: values.content,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        toaster("Success", "Your thread is successfully updated", "default");
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
      {!isFetching && isSuccess && data.ok ? (
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
                <FormLabel>
                  Current category:{" "}
                  <span className="capitalize text-yellow-500">
                    {getValues("category")}
                  </span>
                </FormLabel>
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
            Save
          </Button>
        </form>
      ) : (
        <CardSkeletons />
      )}
    </Form>
  );
};

export default EditThreadForm;
