import { DateTime } from "luxon";
import { StaticImageData } from "next/image";

export type TFeatureCard = {
  icon: string;
  characteristic: string;
  description: string;
};

export type TThread = {
  id: number;
  title: string;
  category: string[];
  content: string;
  authorName: string;
  authorId: number;
  createdAt: DateTime;
};

export type TAuthor = {
  id: string;
  username: string;
  email: string;
  bio: string;
  links: string[];
};

export type TMyCard = {
  author: string;
  image: StaticImageData;
};

export type TComments = {
  id: number;
  authorId: number;
  threadId: number;
  authorName: string;
  content: string;
  createdAt: DateTime;
};
