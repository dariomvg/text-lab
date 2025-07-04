"use client"
import { useAI } from "@/hooks/useAI";
import "@/styles/section-ai.css";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Loader } from "./Loader";

export const SectionAI = ({
  openChat,
  toggleChat,
}: {
  openChat: boolean;
  toggleChat: () => void;
}) => {
  const [question, setQuestion] = useState<string>("");
  const { create, responsesAI: responses, err: error, loading } = useAI();

  const newQuestion = async () => {
    create(question);
    setQuestion("");
  };

  return (
    <section className={`section-ai ${openChat ? "show" : ""}`}>
      <button onClick={toggleChat} className="btn-close-chat">
        Cerrar chat
      </button>
      <div className="container-controls-chat">
        <textarea
          name="question"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          placeholder="Recomendaciones de títulos, subtítulos, descripciones..."
          className="textarea-chat"
          required></textarea>
        <button className="btn-send-chat" onClick={newQuestion}>
          {loading ? (<Loader />) : "Enviar"}
        </button>
      </div>
      <div className="container-chat">
        {responses.length > 0 &&
          responses.map(({ question, result, id }) => (
            <div className="msg-chat" key={id}>
              <strong className="question-msg-chat">{question}</strong>
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          ))}
      </div>
      {error && (
        <p className="text-error">LLegaste al límite de preguntas por hoy</p>
      )}
    </section>
  );
};
