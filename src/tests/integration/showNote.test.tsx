import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Note from "@/app/nota/[id]/page";
import NotesProvider from "@/contexts/ContextNotes";
import { CardNote } from "@/components/CardNote";

// import { useRouter } from "next/navigation";
// jest.mock("next/navigation", () => ({
//     useRouter: jest.fn(), // Asegúrate de mockear `useRouter` como una función.
//   }));
//   const mockPush = jest.fn();
//   (useRouter as jest.Mock).mockReturnValueOnce({
//     push: mockPush,
//   });


describe("Se muestran los datos de la nota correctamente", () => {
  it("click en una nota y ver los datos", async () => {

    render(
      <NotesProvider>
        <Note params={{ id: "1" }} />
      </NotesProvider>
    );
    const button = screen.getByRole("button", { name: "Guardar cambios" });
    const section = screen.getByTestId("show-text");
    expect(button).toBeInTheDocument();
    expect(section).toHaveTextContent("");
  });

  it("se muestra mensaje despues de guardar", async () => {
    render(
      <NotesProvider>
        <Note params={{ id: "1" }} />
      </NotesProvider>
    );
    const button = screen.getByRole("button", { name: "Guardar cambios" });
    await userEvent.click(button);

    expect(screen.getByText("Guardado")).toBeInTheDocument();
  });

  it("los datos se muestran correctamnete en CardNote", async () => {
    const data = {
      id: 0,
      title: "react",
      topic: "programming",
      content: "",
    };
    render(
      <NotesProvider>
        <CardNote item={data} />
      </NotesProvider>
    );
    const section = screen.getByTestId("card-note");
    const button = screen.getByRole("button", { name: "Eliminar" });

    expect(section).toHaveTextContent("react");
    expect(section).toHaveTextContent("Tema: programming");
    expect(button).toBeInTheDocument();
  });
});
