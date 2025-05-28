"use client";

import { useState, useEffect } from "react";
import { useUser, useDeleteUser } from "../hooks/UseUserHooks";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface UserDeleteDialogProps {
  userId: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDeleteDialog({ userId, isOpen, onClose }: UserDeleteDialogProps) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { data: user, isLoading } = useUser(userId || "");
  const { mutateAsync: deleteUser } = useDeleteUser();

  // Reset confirm text when dialog opens
  useEffect(() => {
    if (isOpen) {
      setConfirmText("");
    }
  }, [isOpen]);

  const confirmDelete = async () => {
    if (!userId) return;

    try {
      setIsDeleting(true);
      await deleteUser(userId);
      onClose();
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading || !user) {
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <Skeleton className="h-6 w-40" />
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Skeleton className="h-20 w-full" />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled>Delete User</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  const isConfirmDisabled = confirmText !== user.email;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete User</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mb-4">
              This action cannot be undone. This will permanently delete the user account
              for <strong>&quot;{user.first_name} {user.last_name}&quot;</strong> and remove
              their data from our servers.
            </div>
            <div className="mb-4">
              To confirm, please type <strong>{user.email}</strong> below:
            </div>
            <Input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={`Type "${user.email}" to confirm`}
              className="mb-2"
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={isConfirmDisabled || isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete User"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
