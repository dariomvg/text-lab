"use client"; 
import { CardNote } from "@/components/CardNote";
import Link from "next/link";
import "./notas.css";
import { useNotesContext } from "@/contexts/ContextNotes";

export default function Notas(): JSX.Element {
  const {notes} = useNotesContext(); 

  return (
    <section className="section-chats">
      {notes.length > 0 ? (
        <>
          <h2 className="title-chats">Tus Notas</h2>
          <section className="container-chats">
            {notes.map((item) => (
              <CardNote key={item.id} item={item} />
            ))}
          </section>
        </>
      ) : (
        <>
          <p className="title-sin-chats">Aún no tienes notas creadas</p>
          <Link href="/crear-nota" className="link-create-chat">Crear nueva nota</Link>
        </>
      )}
    </section>
  );
}
