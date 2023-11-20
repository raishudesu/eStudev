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
import Link from "next/link";
import { signIn } from "next-auth/react";
import { signinSchema } from "@/lib/zod";
import { toast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const query = useSearchParams();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { formState } = form;

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

  const onSubmit = async (values: z.infer<typeof signinSchema>) => {
    const searchParams = query.get("callbackUrl") as string;
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res?.ok) {
        if (searchParams) {
          router.push(query.get("callbackUrl") as string);

          // THE DEFAULT REDIRECT TO THREADS
        } else {
          router.push("/threads");
        }

        toaster("Success!", "Signed in successfully", "default");
        router.refresh();
      } else {
        toaster("Something went wrong.", res?.error as string, "destructive");
      }

      console.log(res);
    } catch (error) {
      toaster("Something went wrong.", error as string, "destructive");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="student@example.com"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    disabled={formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Link
          className="text-sm text-blue-500 hover:underline"
          href="/register"
        >
          Forgot password?
        </Link>
        <Button
          className="w-full mt-6"
          type="submit"
          disabled={formState.isSubmitting}
        >
          Sign in
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm mt-2">
        Doesn&apos;t have an account? {""}
        <Link className="text-blue-500 hover:underline" href="/register">
          Register
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
