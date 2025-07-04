import { ColorOptions } from "@tiptap/extension-color";
import { LinkOptions } from "@tiptap/extension-link";
import { Extension, Mark, Node } from "@tiptap/react";
import { StarterKitOptions } from "@tiptap/starter-kit";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface DataFormTypes {
  id: number;
  title: string;
  topic: string;
  content: string;
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
  message: string;
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
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

export interface ObjectAI {
  id: string;
  question: string;
  result: string;
}
