"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchSchema } from "@/lib/zod";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const SearchForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keywords: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof searchSchema>) => {
    router.push(`/search/${values.keywords}`);
    // setOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex gap-3 items-center"
      >
        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Search here..."
                  {...field}
                  className="w-full border-none"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mr-1"
          variant={"secondary"}
          size={"sm"}
          type="submit"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};

export default SearchForm;
