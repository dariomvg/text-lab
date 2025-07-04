"use client";
import { useNotesContext } from "@/contexts/ContextNotes";
import { DataFormTypes, UseFindNoteTypes } from "@/types/types";
import { useState } from "react";

export const useFindNote = (id: string): UseFindNoteTypes => {
  const { findProject, addNote } = useNotesContext();
  const current = findProject(parseInt(id));
  const [message, setMessage] = useState("");
  const [html, setHtml] = useState(current?.content || "");

  const handleActive = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 4000);
  };

  const saveContentNote = () => {
    if (current) {
      const newProject: DataFormTypes = { ...current, content: html };
      addNote(newProject);
      handleActive("Guardado");
    }
  };

  return { saveContentNote, message, html, setHtml };
};
