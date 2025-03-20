import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

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

export interface HandleNotesTypes {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleChangeNote: () => void;
  active: boolean;
}
