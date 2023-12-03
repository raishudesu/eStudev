import { z } from "zod";

export const userServerSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username must be less than 25 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .min(3, "Email must be at least 3 characters")
    .email("Invalid email"),
  gender: z.string({
    required_error: "Please select your gender",
  }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(3, { message: "Username should be atleast 3 characters long" })
      .max(50, { message: "Username should be less than 50 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email" }),
    // isAdmin: z.boolean({ required_error: "isAdmin property is required" }),
    gender: z.string({
      required_error: "Please select your gender",
    }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password should be at least 6 characters long" }),
    confirmPassword: z
      .string({ required_error: "Confirm your password" })
      .min(6, { message: "Passwords do not match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const signinSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password should be at least 6 characters long" }),
});

export const threadSchema = z.object({
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
  authorId: z.number(),
  authorName: z.string(),
});

export const updateThreadSchema = z.object({
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

export const commentSchema = z.object({
  id: z.number().optional(),
  authorId: z.number({ required_error: "Author ID is required" }),
  authorName: z.string({ required_error: "Author name is required" }),
  threadId: z.number({ required_error: "Thread ID is required" }),
  content: z
    .string({ required_error: "Thread ID is required" })
    .min(3, "Comment must be at least 3 characters")
    .max(255, "Comment must not exceed 255 characters"),
});

export const searchSchema = z.object({
  keywords: z
    .string({ required_error: "Keywords are required" })
    .min(3, "Keywords must be at least 3 characters."),
});
