"use client";
import "react-quill/dist/quill.snow.css";
import { useFindNote } from "@/hooks/useFindNote";
import iconCheck from "@/assets/icon-check.svg";
import iconInfo from "@/assets/icon-info.svg";
import { NoteParams } from "@/types/types";
import { NavEditor } from "@/components/NavEditor";
import { EditorProvider } from "@tiptap/react";
import { useEditorConfig } from "@/hooks/useEditorConfig";
import Link from "next/link";
import "./note.css";
import { SectionAI } from "@/components/SectionAI";
import { useState } from "react";

export default function Note({ params }: NoteParams) {
  const { id } = params;
  const { saveContentNote, message, html, setHtml } = useFindNote(id);
  const { extensions } = useEditorConfig();
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false); 
  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <main className="main-editor">
      <div className={`message ${message ? "view" : ""}`}>
        <p>{message}</p>
        <img src={iconCheck.src} alt="check message" width={30} height={30} />
      </div>
      <section className="page-note">
        <section className="section-editor">
          <div className="container-buttons-form">
            <button className="button-form" onClick={saveContentNote}>
              Guardar
            </button>
            <Link href="/notas" className="link-form delete-form">
              Cancelar
            </Link>
            <button onClick={toggleChat} className="button-ia">
              Pregunta a la IA
            </button>
            <button className="button-info" onClick={() => setShowInfo(!showInfo)}>
              <img src={iconInfo.src} alt="icon info" width={30} height={30} />
            </button>
            
            <div className={`container-info ${showInfo ? "show-info" : ""}`}>
              <p className="text-info">El texto generado con IA en esta nota no se almacenará, una vez salgas, se eliminara todo lo buscado</p>
            </div>
          </div>
          <EditorProvider
            slotBefore={<NavEditor />}
            immediatelyRender={false}
            extensions={extensions}
            content={html}
            onUpdate={({ editor }) => setHtml(editor.getHTML())}
          />
        </section>
        <SectionAI openChat={openChat} toggleChat={toggleChat} />
      </section>
    </main>
  );
}
