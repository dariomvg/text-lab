"use client";
import Link from "next/link";
import "../styles/card-note.css";
import { useNotesContext } from "@/contexts/ContextNotes";
import { PropsCard } from "@/types/types";
import { topics } from "@/libs/topics";
import { CardTopic } from "./CardTopic";

export const CardNote = ({ item }: PropsCard) => {
  const { id, title, topic } = item;
  const { deleteNote } = useNotesContext();

  return (
    <div className="card-note" data-testid="card-note">
      <h3 className="title-card-note">{title}</h3>
      
        {topics.map((item) =>
          item.name === topic ? (
            <div className="box-topic-card-note" key={item.id}>
              <img
                src={item.icon.src}
                alt={`icon topic ${item.name}`}
                width={26}
                height={26}
              />
              <p className="title-box-topic">{item.name}</p>
            </div>
          ) : null
        )}
      
      <hr />
      <div className="btns-card">
        <button className="btn-delete-note" onClick={() => deleteNote(id)}>
          Eliminar
        </button>
        <Link href={`/nota/${id}`} className="link-card">
          Abrir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="icon-link-card">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
