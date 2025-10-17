"use client";
import {
  ChildrenContextType,
  ContextNotesTypes,
  DataFormTypes,
} from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext<ContextNotesTypes | null>(null);

export const useNotesContext = (): ContextNotesTypes => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("Error context app");
  return context;
};

export default function NotesProvider({ children }: ChildrenContextType) {
  const [notes, setNotes] = useState<DataFormTypes[]>([]);

  const findProject = (id: number): DataFormTypes | undefined => {
    const note = notes.find((note) => note.id == id);
    return note;
  };

  const addNote = (data: DataFormTypes) => {
    if (data.id) {
      setNotes(notes.map((note) => (data.id === note.id ? data : note)));
    } else {
      setNotes([...notes, { ...data, content: "", id: Date.now() }]);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localNotes = JSON.parse(localStorage.getItem("textLab") || "[]");
      if (localNotes.length > 0) {
        setNotes(localNotes);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textLab", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, findProject }}>
      {children}
    </NotesContext.Provider>
  );
}
