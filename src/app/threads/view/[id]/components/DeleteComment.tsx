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
import { Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/stores/comments";
import { Button } from "@/components/ui/button";

const DeleteComment = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
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
      const res = await deleteComment(id);
      if (res.ok) {
        toaster("Deleted", "Comment successfully deleted", "default");
        queryClient.invalidateQueries({ queryKey: ["thread"] });
        return;
      }
      toaster("Something went wrong", "", "destructive");
    } catch (error) {
      console.log(error);
      toaster("Something went wrong", error as string, "destructive");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} size={"sm"}>
          <Trash2 size={15} />
        </Button>
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
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteComment;
