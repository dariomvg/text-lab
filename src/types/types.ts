import { ColorOptions } from "@tiptap/extension-color";
import { LinkOptions } from "@tiptap/extension-link";
import { Extension, Mark, Node } from "@tiptap/react";
import { StarterKitOptions } from "@tiptap/starter-kit";
import { MutableRefObject, ReactNode } from "react";

export interface TopicsTypes {
  id: number;
  name: string;
  icon: { alt: string; src: string };
}

export interface DataFormTypes {
  id?: number;
  title: string;
  topic: string;
  content?: string;
}

export interface PropsCard {
  item: DataFormTypes;
}

export interface ContextNotesTypes {
  notes: DataFormTypes[];
  findProject: (id: number) => DataFormTypes | undefined;
  addNote: (data: DataFormTypes) => void;
  deleteNote: (id: number) => void;
}

export interface ChildrenContextType {
  children: ReactNode;
}

export interface NoteParams {
  params: {
    id: string;
  };
}

export interface Modules {
  toolbar: {
    container: (
      | string[]
      | { header: (number | boolean)[] }[]
      | { list: string }[]
    )[];
  };
}

export interface UseFindNoteTypes {
  saveContentNote: () => void;
  html: MutableRefObject<string>;
}

export interface UseEditorConfig {
  extensions: (
    | Extension<ColorOptions, any>
    | Extension<StarterKitOptions, any>
    | Mark<LinkOptions, any>
    | Node
  )[];
  addImage: () => void;
  addLink: () => void;
}

export interface UseShareTypes {
  createFileMarkdown: (content: string) => void;
  createFileText: (content: string) => void;
  transformFile: (content: string, filename: string, typeMIME: string) => void;
}

export interface ObjectAI {
  id: string;
  question: string;
  result: string;
}

type TypeFile = {
  filename: string; 
  type: string; 
}

export interface TypesFiles {
  html: TypeFile;
  txt: TypeFile;
  markdown: TypeFile;
}