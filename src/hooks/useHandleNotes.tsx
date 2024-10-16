"use client";
import { useNotesContext } from "@/contexts/ContextNotes";
import { DataFormTypes, HandleNotesTypes } from "@/types/types";

import { useState } from "react";

export const useHandleNotes = (id: string): HandleNotesTypes => {
  const { findProject, addNote } = useNotesContext();
  const current = findProject(parseInt(id));
  const [active, setActive] = useState(false);

  const [value, setValue] = useState(current?.content || "");

  const handleActive = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 4000);
  };

  const handleChangeNote = () => {
    if (current) {
      const newProject: DataFormTypes = { ...current, content: value };
      addNote(newProject);
      handleActive();
    }
  };

  return { value, setValue, handleChangeNote, active };
};
