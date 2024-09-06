"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("Error context app");
  return context;
};

export default function NotesProvider({ children }) {
  const router = useRouter(); 
  const [notes, setNotes] = useState([]);

  const findProject = (id) => {
    const noteFound = notes.find((note) => note.id == id);
    return noteFound;
  };

  const addNote = (data) => {
    if (data.id) {
      setNotes(notes.map((note) => (data.id === note.id ? data : note)));
    } else {
      data.id = Date.now();
      setNotes([...notes, data]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("textLab"));
    if (localNotes) {
      setNotes(localNotes); 
    }
  }, []); 


  useEffect(() => {
    if (notes.length > 0) { 
      localStorage.setItem("textLab", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, findProject }}>
      {children}
    </NotesContext.Provider>
  );
}
