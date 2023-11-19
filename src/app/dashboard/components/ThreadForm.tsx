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

const threadSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(2, {
      message: "Title must be at least 3 characters.",
    })
    .max(125, { message: "Title must be less than 125 characters" }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  content: z.string({ required_error: "Content is required" }).min(15, {
    message: "Content must be at least 15 characters.",
  }),
});

const ThreadForm = () => {
  // ...
  const form = useForm<z.infer<typeof threadSchema>>({
    resolver: zodResolver(threadSchema),
    defaultValues: {
      title: "",
      category: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof threadSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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
                {/* <ReactQuill
                  formats={formats}
                  modules={modules}
                  {...field}
                  theme="snow"
                  className="w-full break-all"
                /> */}
                <Editor {...field} />
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
