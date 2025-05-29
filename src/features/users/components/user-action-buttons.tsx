"use client";

import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface UserActionButtonsProps {
  userId: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function UserActionButtons({ userId, onEdit, onDelete }: UserActionButtonsProps) {

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" onClick={() => onEdit(userId)} className="h-8 w-8 p-0">
        <Edit className="h-4 w-4" />
        <span className="sr-only">edit</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(userId)}
        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
      >
        <Trash className="h-4 w-4" />
        <span className="sr-only">delete</span>
      </Button>
    </div>
  );
}
