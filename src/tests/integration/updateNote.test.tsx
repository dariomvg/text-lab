import { render, screen, waitFor} from "@testing-library/react";
import Note from "@/app/nota/[id]/page";
import { useNotesContext } from "@/contexts/ContextNotes";
import userEvent from "@testing-library/user-event";

jest.mock("@/contexts/ContextNotes", () => ({
  useNotesContext: jest.fn(),
}));

jest.mock("react-quill", () => {
  return function MockReactQuill({ value, onChange }: { value: string; onChange: (val: string) => void }) {
    return (
      <textarea
        data-testid="quill-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };
});

describe("Note Component", () => {
  it("should save the note and show confirmation message", async () => {

    const mockFindProject = jest.fn().mockReturnValue({ id: 1, content: "Initial content" });
    const mockAddNote = jest.fn();

    (useNotesContext as jest.Mock).mockReturnValue({
      findProject: mockFindProject,
      addNote: mockAddNote,
    });

    render(<Note params={{ id: "1" }} />);
  
    const quillEditor = screen.getByTestId("quill-editor");
    expect(quillEditor).toHaveValue("Initial content");

    await userEvent.type(quillEditor, " Updated content")
    expect(quillEditor).toHaveValue("Initial content Updated content");

    const saveButton = screen.getByText("Guardar cambios");
    await userEvent.click(saveButton);

    expect(mockAddNote).toHaveBeenCalledWith({
      id: 1,
      content: "Initial content Updated content",
    });

    const confirmationMessage = screen.getByText("Guardado");
    expect(confirmationMessage).toBeInTheDocument();

 
    await waitFor(() => {
        new Promise((resolve) => setTimeout(resolve, 4000));
        expect(confirmationMessage).not.toHaveClass("view");
    });
  });
});
