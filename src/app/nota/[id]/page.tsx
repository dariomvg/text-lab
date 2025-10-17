"use client";
import "react-quill/dist/quill.snow.css";
import { useFindNote } from "@/hooks/useFindNote";
import { NoteParams } from "@/types/types";
import { NavEditor } from "@/components/NavEditor";
import { EditorProvider } from "@tiptap/react";
import { useEditorConfig } from "@/hooks/useEditorConfig";
import Link from "next/link";
import "./note.css";
import { SectionAI } from "@/components/SectionAI";
import { useState } from "react";
import iconShare from "@/assets/icon-share.svg";
import iconIA from "@/assets/icon-ia.svg";
import iconReturn from "@/assets/icon-link-return.svg";
import { SectionShare } from "@/components/SectionShare";
import { Toaster } from "react-hot-toast";

export default function Note({ params }: NoteParams) {
  const { id } = params;
  const { saveContentNote, html } = useFindNote(id);
  const { extensions } = useEditorConfig();
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);

  const toggleChat = () => setOpenChat(!openChat);
  const toggleShare = () => setShowShare(!showShare);

  return (
    <main className="main-editor">
      <Toaster />
      <section className="page-note">
        <section className="section-editor">
          <div className="container-buttons-form">
            <Link href="/notas" className="link-form delete-form">
              <img
                src={iconReturn.src}
                alt="icon link return"
                width={20}
                height={20}
              />
              Volver
            </Link>
            <button className="button-form" onClick={saveContentNote}>
              Guardar
            </button>
            <button onClick={toggleChat} className="button-container-form">
              <img
                src={iconIA.src}
                alt="icon ia"
                width={26}
                height={26}
                title="Chat con IA"
              />
            </button>
            <button
              className="button-container-form"
              onClick={() => setShowShare(!showShare)}>
              <img
                src={iconShare.src}
                alt="icon share"
                width={26}
                height={26}
                title="Compartir"
              />
            </button>
          </div>

          <EditorProvider
            slotBefore={<NavEditor />}
            immediatelyRender={false}
            extensions={extensions}
            content={html.current}
            onUpdate={({ editor }) => (html.current = editor.getHTML())}
          />
        </section>
        <SectionAI openChat={openChat} toggleChat={toggleChat} />
        <SectionShare
          showShare={showShare}
          toggleShare={toggleShare}
          content={html.current}
        />
      </section>
    </main>
  );
}
