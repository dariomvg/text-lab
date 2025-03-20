"use client";
import "./note.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHandleNotes } from "@/hooks/useHandleNotes";
import iconCheck from "@/icons/icon-check.svg";
import { NoteParams } from "@/types/types";
import { formats, modules } from "@/libs/options";

export default function Note({ params }: NoteParams): JSX.Element {
  const { id } = params;
  const { value, setValue, handleChangeNote, active } =
    useHandleNotes(id);

  return (
    <>
      <div className={`message ${active ? "view" : ""}`}>
        <p>Guardado</p>
        <img src={iconCheck.src} alt="check message" width={30} height={30} />
      </div>
      <section className="page-note">
        <div>
          <button onClick={handleChangeNote} className="btn-page-notas save">
            Guardar cambios
            <img src={iconCheck.src} alt="check message" width={25} height={25} />
          </button>
        </div>

        <section className="target-text" data-testid="show-text">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </section>
      </section>
    </>
  );
}
