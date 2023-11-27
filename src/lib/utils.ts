import { type ClassValue, clsx } from "clsx";
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeAgo = (createdAt: DateTime) => {
  const formattedTime = DateTime.fromISO(createdAt.toString()).toRelative();
  return formattedTime;
};
