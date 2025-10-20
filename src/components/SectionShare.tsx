import "@/styles/section-share.css";
import iconDownload from "@/assets/icon-download.svg";
import iconText from "@/assets/icon-text.svg";
import iconCode from "@/assets/icon-code.svg";
import { useShare } from "@/hooks/useShare";
import { formats } from "@/hooks/types_files";

export const SectionShare = ({
  showShare,
  toggleShare,
  content,
}: {
  showShare: boolean;
  toggleShare: () => void;
  content: string;
}) => {
  const { transformFile, createFileMarkdown, createFileText } = useShare();

  return (
    <section className={`section-share ${showShare ? "show-modal-share" : ""}`}>
     
      <div className="modal-share">
        <button onClick={toggleShare} className="button-close-modal">
          Cerrar
        </button>
        <h3 className="title-model-share">
          Comparte descargando en el formato que prefieras
        </h3>
        <div className="container-buttons-modal">
          <button
            className="button-modal"
            onClick={() =>
              transformFile(content, formats.html.filename, formats.html.type)
            }>
            <img
              src={iconCode.src}
              alt="icon button code"
              width={22}
              height={22}
              className="icon-button-modal"
            />
            HTML
          </button>
          <button
            className="button-modal"
            onClick={() => createFileText(content)}>
            <img
              src={iconText.src}
              alt="icon button text plain"
              width={22}
              height={22}
              className="icon-button-modal"
            />
            Texto
          </button>
          <button
            className="button-modal"
            onClick={() => createFileMarkdown(content)}>
            <img
              src={iconDownload.src}
              alt="icon button markdown"
              width={22}
              height={22}
              className="icobuttonon-modal"
            />
            Markdown
          </button>
        </div>
      </div>
    </section>
  );
};
