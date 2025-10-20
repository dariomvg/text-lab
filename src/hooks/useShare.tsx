"use client";
import { UseShareTypes } from "@/types/types";
import { convert } from "html-to-text";
import htmlToMarkdown from "@wcj/html-to-markdown";
import { formats } from "./types_files";

export const useShare = (): UseShareTypes => {
  const createFileMarkdown = async (content: string) => {
    const markdown = await htmlToMarkdown({ html: content });
    transformFile(markdown, formats.markdown.filename, formats.markdown.type);
  };

  const createFileText = (content: string) => {
    const txt = convert(content, { wordwrap: 130 });
    transformFile(txt, formats.txt.filename, formats.txt.type);
  };

  const transformFile = (
    content: string,
    filename: string,
    typeMIME: string
  ) => {
    const blob = new Blob([content], { type: typeMIME });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    transformFile,
    createFileMarkdown,
    createFileText,
  };
};
