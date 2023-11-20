"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteThread } from "@/stores/threads";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const DeleteDialog = ({ id }: { id: number }) => {
  const router = useRouter();
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

  const handleDelete = async () => {
    try {
      const res = await deleteThread(id);
      if (res.ok) {
        toaster("Deleted", "Thread successfully deleted", "default");
        return;
      }
      toaster("Something went wrong", "", "destructive");
    } catch (error) {
      console.log(error);
      toaster("Something went wrong", error as string, "destructive");
    } finally {
      router.replace("/threads");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Link href={""} className="w-full flex items-center">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Link>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
