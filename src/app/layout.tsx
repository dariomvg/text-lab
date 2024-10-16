import NotesProvider from "@/contexts/ContextNotes";
import "./globals.css";
import { Header } from "@/components/Header.js";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TextLab - crea tus notas con los temas que necesites",
  description:
    "TextLab te permite crear notas o apuntes sobre temas personales: trabajo, estudio, proyectos. lo que te ayuda a mantener todo separado y ordenado",
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
