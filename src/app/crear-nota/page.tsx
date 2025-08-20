"use client";
import { FormEvent, useRef} from "react";
import "./create-note.css";
import { useNotesContext } from "@/contexts/ContextNotes";
import { useRouter } from "next/navigation";

export default function NewNote() {
  const refTitle = useRef<HTMLInputElement>(null);
  const refTopic = useRef<HTMLInputElement>(null);
  const { addNote } = useNotesContext();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = {
      id: 0,
      content: "",
      title: refTitle.current.value,
      topic: refTopic.current.value
    }
    addNote(newNote);
    refTitle.current.value = "";
    refTopic.current.value = "";
    router.push("/notas");
  };

  return (
    <section className="section-create-chat">
      <form className="form-create" onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="titulo">Título de la nota</label>
          <input
            type="text"
            id="titulo"
            className="input-create"
            name="title"
            required
            ref={refTitle}
          />
        </div>
        <div className="container-input">
          <label htmlFor="topic">Tema de la nota</label>
          <input
            type="text"
            id="topic"
            className="input-create"
            name="topic"
            required
            ref={refTopic}
          />
        </div>
        <button type="submit" className="btn-create">
          Crear
        </button>
      </form>
    </section>
  );
}
