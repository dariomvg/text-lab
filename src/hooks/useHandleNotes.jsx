"use client";
import { useNotesContext } from "@/contexts/ContextNotes";

import { useState } from "react";

export const useHandleNotes = (id) => {

  
  const { findProject, addNote} = useNotesContext();
  const current = findProject(id);
  const [active, setActive] = useState(false); 

  const [value, setValue] = useState(() => {
    if (current.content !== undefined) return current.content;
    return "";
  });

  const handleActive = () => {
    setActive(true); 
    setTimeout(() => {
      setActive(false); 
    }, 4000); 
  }

  const handleChangeNote = () => {
    const newProject = {...current, content: value};
    addNote(newProject);
    handleActive();
  };


  return { value, setValue, handleChangeNote, active};

};
