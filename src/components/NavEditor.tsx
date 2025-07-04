"use client"
import { useCurrentEditor } from "@tiptap/react";
import { useEditorConfig } from "@/hooks/useEditorConfig";
import iconBack from "../assets/editor/icons/icon-back.svg";
import iconDelete from "../assets/editor/icons/icon-delete.svg";
import iconImage from "../assets/editor/icons/icon-image.svg";
import iconLink from "../assets/editor/icons/icon-link.svg";
import iconListOrder from "../assets/editor/icons/icon-list-order.svg";
import iconList from "../assets/editor/icons/icon-list.svg";
import iconNext from "../assets/editor/icons/icon-next.svg";
import iconNotes from "../assets/editor/icons/icon-notes.svg";
import iconTable from "../assets/editor/icons/icon-table.svg";
import iconCode from "../assets/editor/icons/icon-code.svg";
import iconH1 from "../assets/editor/icons/icon-h1.svg";
import iconH2 from "../assets/editor/icons/icon-h2.svg";
import iconH3 from "../assets/editor/icons/icon-h3.svg";
import iconH4 from "../assets/editor/icons/icon-h4.svg";
import iconH5 from "../assets/editor/icons/icon-h5.svg";
import iconH6 from "../assets/editor/icons/icon-h6.svg";
import iconBold from "../assets/editor/icons/icon-bold.svg";
import iconStrike from "../assets/editor/icons/icon-strike.svg";
import iconItalic from "../assets/editor/icons/icon-italic.svg";
import "@/styles/nav-editor.css";

export const NavEditor = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  const { addImage, addLink } = useEditorConfig();

  return (
    <div className="control-group">
      <section className="section-elements space">
        <div className="container-elements">
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}>
            Párrafo
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }>
            <img src={iconH1.src} alt="h1" width={22} height={22} />

          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }>
            <img src={iconH2.src} alt="h2" width={22} height={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }>
            <img src={iconH3.src} alt="h3" width={22} height={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }>
            <img src={iconH4.src} alt="h4" width={22} height={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }>
            <img src={iconH5.src} alt="h5" width={22} height={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }>
            <img src={iconH6.src} alt="h6" width={22} height={22} />
          </button>
        </div>
        <div className="container-elements">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}>
            <img src={iconBold.src} alt="Bold" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}>
            <img src={iconItalic.src} alt="Italic" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}>
           <img src={iconStrike.src} alt="Strike" width={22} height={22} />
          </button>
        </div>
        <div className="container-elements">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}>
            
            <img src={iconList.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}>
            
            <img src={iconListOrder.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}>
            Notas
            <img src={iconNotes.src} alt="link" width={22} height={22} />
          </button>
        </div>
      </section>
      <section className="section-elements">
        <div className="container-elements">
        <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
          >
            
            <img src={iconCode.src} alt="link" width={22} height={22} />
          </button>
          <button onClick={addImage}>
            
            <img src={iconImage.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={addLink}
            className={editor.isActive("link") ? "is-active" : ""}>
            
            <img src={iconLink.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}>
            Enlace
            <img src={iconDelete.src} alt="link" width={22} height={22} />
          </button>
        </div>
      </section>

      <section className="section-elements space">
        <div className="container-elements">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 2, cols: 2, withHeaderRow: true })
                .run()
            }>
            Tabla
            <img src={iconTable.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().addColumnBefore().run()}>
              <img src={iconBack.src} alt="link" width={22} height={22} />
            Columna
          </button>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
            Columna
            <img src={iconNext.src} alt="link" width={22} height={22} />
          </button>

          <button onClick={() => editor.chain().focus().addRowBefore().run()}>
            <img src={iconBack.src} alt="link" width={22} height={22} />
            Fila
          </button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()}>
            Fila
            <img src={iconNext.src} alt="link" width={22} height={22} />
          </button>
          <button onClick={() => editor.chain().focus().mergeCells().run()}>
            Unir celdas
          </button>
          <button onClick={() => editor.chain().focus().splitCell().run()}>
            Separar celdas
          </button>
        </div>
        <div className="container-elements">
          <button onClick={() => editor.chain().focus().deleteColumn().run()}>
            Columna
            <img src={iconDelete.src} alt="link" width={22} height={22} />
          </button>
          <button onClick={() => editor.chain().focus().deleteRow().run()}>
            Fila
            <img src={iconDelete.src} alt="link" width={22} height={22} />
          </button>
          <button onClick={() => editor.chain().focus().deleteTable().run()}>
            Tabla
            <img src={iconDelete.src} alt="link" width={22} height={22} />
          </button>
        </div>
      </section>

      <section className="section-elements space">
        <div className="container-elements">
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            Línea horizontal
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            Espacio
          </button>
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            Remover estilos
            <img src={iconDelete.src} alt="link" width={22} height={22} />
          </button>
        </div>
        <div className="container-elements">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}>
            <img src={iconBack.src} alt="link" width={22} height={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}>
            <img src={iconNext.src} alt="link" width={22} height={22} />
          </button>
        </div>
      </section>
    </div>
  );
};
