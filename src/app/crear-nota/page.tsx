"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import "./create-note.css";
import { useNotesContext } from "@/contexts/ContextNotes";
import { useRouter } from "next/navigation";
import { dataForm } from "@/libs/objects";

export default function NewNote(): JSX.Element {
  const [form, setForm] = useState(dataForm);
  const { addNote } = useNotesContext();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(form);
    setForm(dataForm);
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
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="container-input">
          <label htmlFor="tema">Tema de la nota</label>
          <input
            type="text"
            id="tema"
            className="input-create"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-create">
          Crear
        </button>
      </form>
    </section>
  );
}
