import NotesProvider from "@/contexts/ContextNotes";
import "./globals.css";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TextLab - Notas - IA",
  description:
    "Escribe tus notas de una forma profesional, completa con todo lo que necesitas e integrado con IA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <NotesProvider>
          <Header />
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}
