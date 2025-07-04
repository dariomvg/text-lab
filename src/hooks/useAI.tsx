"use client";
import { useState } from "react";
import { ObjectAI } from "@/types/types";
import { GoogleGenAI } from "@google/genai";
import { IA_API_KEY } from "@/libs/options_ai";

const clientAI = new GoogleGenAI({ apiKey: IA_API_KEY });

export const useAI = () => {
  const [responsesAI, setResponsesAI] = useState<ObjectAI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState(null);

  const create = async (question: string) => {
    try {
      setLoading(true)
      const response = await clientAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question,
      });
      if (response) {
        setResponsesAI((prevState) => [
          ...prevState,
          {
            question,
            result: response.text,
            id: `${Date.now()}`,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
      setErr(error);
    }finally {
      setLoading(false)
    }
  };

  return { create, responsesAI, err, loading };
};

