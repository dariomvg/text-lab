"use client";
import { useNotesContext } from "@/contexts/ContextNotes";
import { DataFormTypes, UseFindNoteTypes } from "@/types/types";
import { useRef } from "react";
import toast from "react-hot-toast";

export const useFindNote = (id: string): UseFindNoteTypes => {
  const { findProject, addNote } = useNotesContext();
  const current = findProject(parseInt(id));
  const html = useRef(current?.content || "");

  const saveContentNote = () => {
    if (current) {
      const newProject: DataFormTypes = { ...current, content: html.current };
      addNote(newProject);
      toast.success("Guardado", {
        position: "top-left",
        duration: 3000,
      });
    }
  };

  return { saveContentNote, html };
};
