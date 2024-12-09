import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewNote from "@/app/crear-nota/page";
import Notas from "@/app/notas/page";
import NotesProvider from "@/contexts/ContextNotes";
import { useRouter } from "next/navigation";


jest.mock("next/navigation", () => ({
  useRouter: jest.fn(), // Asegúrate de mockear `useRouter` como una función.
}));

describe("Los datos ingresan, se leen y muestran correctamente", () => {
  it("los datos ingresan y se muestran correctamente", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush, 
    });

    render(
      <NotesProvider>
        <NewNote />
      </NotesProvider>
    );

    const title = screen.getByRole("textbox", { name: "Título de la nota" });
    const topic = screen.getByRole("textbox", { name: "Tema de la nota" });
    const button = screen.getByRole("button", { name: "Crear" });

    await userEvent.type(title, "react");
    await userEvent.type(topic, "programming");

    expect(title).toHaveValue("react");
    expect(topic).toHaveValue("programming");

    await userEvent.click(button);

    render(
      <NotesProvider>
        <Notas />
      </NotesProvider>
    );

    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("programming")).toBeInTheDocument();
  });
});
