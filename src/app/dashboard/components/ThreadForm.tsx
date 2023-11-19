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
import { filters } from "@/app/threads/components/Filter";

import Editor from "./Editor";
import { threadSchema } from "@/lib/zod";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import "react-quill/dist/quill.snow.css";
import { formats, modules } from "@/lib/editor";
import { forwardRef, useCallback, useMemo, useRef } from "react";
import dynamic from "next/dynamic";

const ThreadForm = () => {
  const session = useSession();
  const router = useRouter();
  const user = session.data?.user;

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

  const { setValue } = form;

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
      const res = await fetch("/api/threads", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: values.title,
          category: values.category,
          content: values.content,
          authorId: Number(user?.id),
          authorName: user?.username,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        toaster("Post", "Your thread can now be viewed", "default");
        form.reset();
        router.push("/dashboard");
      } else {
        toaster("Something went wrong.", data.message, "destructive");
      }
    } catch (error) {
      toaster("Something went wrong.", error as string, "destructive");
    }
  }

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
                <Input placeholder="Your thread title goes here" {...field} />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormLabel>Content</FormLabel>
              <FormControl>
                <ReactQuill
                  formats={formats}
                  modules={modules}
                  theme="snow"
                  className="w-full"
                  onChange={handleQuillChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:self-start">
          Create
        </Button>
      </form>
    </Form>
  );
};

export default ThreadForm;
