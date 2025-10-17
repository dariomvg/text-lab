"use client";
import { UseShareTypes } from "@/types/types";
import { convert } from "html-to-text";
import htmlToMarkdown from "@wcj/html-to-markdown";
import { formats } from "./types_files";
import { useState } from "react";
import toast from "react-hot-toast";

export const useShare = (): UseShareTypes => {
  const [loading, setLoading] = useState({
    loadingPdf: false,
    loadingMarkdown: false,
  });

  const createFilePDF = async (content: string) => {
    try {
      setLoading({ ...loading, loadingPdf: true });
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html: content }),
      });

      const blobPdf = await res.blob();
      transformFile(blobPdf, formats.pdf.filename, formats.pdf.type);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading({ ...loading, loadingPdf: false });
      toast.success("PDF completo", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const createFileMarkdown = async (content: string) => {
    try {
      setLoading({ ...loading, loadingMarkdown: true });

      const markdown = await htmlToMarkdown({ html: content });
      transformFile(markdown, formats.markdown.filename, formats.markdown.type);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading({ ...loading, loadingMarkdown: false });
      toast.success("Markdown completo", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const createFileText = (content: string) => {
    const txt = convert(content, { wordwrap: 130 });
    transformFile(txt, formats.txt.filename, formats.txt.type);
  };

  const transformFile = (
    content: string | Blob,
    filename: string,
    typeMIME: string
  ) => {
    const blob =
      content instanceof Blob
        ? content
        : new Blob([content], { type: typeMIME });

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
    createFilePDF,
    transformFile,
    createFileMarkdown,
    createFileText,
    loading,
  };
};
