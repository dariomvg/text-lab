"use client"
import Link from "next/link";
import "../styles/card-note.css";
import { useNotesContext } from "@/contexts/ContextNotes";

export const CardNote = ({ item }) => {
  const { id, title, topic } = item;
  const { deleteNote } = useNotesContext();


  return (  
    <div className="card-note">
      <h3 className="title-card-note">{title}</h3>
        <p className="subtitle-card-note">
          <b>Tema: </b> {topic}
        </p>
        <div className="btns-card">
          <button className="btn-delete-note" onClick={() => deleteNote(id)}>Eliminar</button>
          <Link href={`/nota/${id}`} className="link-card">Visitar</Link>
        </div>
    </div>
  );
};
