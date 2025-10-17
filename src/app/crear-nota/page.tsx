"use client";
import { FormEvent, useRef, useState } from "react";
import "./create-note.css";
import { useNotesContext } from "@/contexts/ContextNotes";
import { useRouter } from "next/navigation";
import { SectionTopics } from "@/components/SectionTopics";

export default function NewNote() {
  const router = useRouter();
  const refTitle = useRef<HTMLInputElement>(null);
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const { addNote } = useNotesContext();

  const changeTopic = (newTopic: string) => {
    setCurrentTopic(newTopic);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote({
      title: refTitle.current.value,
      topic: currentTopic ?? "Personal",
    });
    refTitle.current.value = "";
    setCurrentTopic("");
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

        <SectionTopics currentTopic={currentTopic} changeTopic={changeTopic} />

        <button type="submit" className="btn-create">
          Crear
        </button>
      </form>
    </section>
  );
}
