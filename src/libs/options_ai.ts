import { GoogleGenAI } from "@google/genai";

export const IA_API_KEY = process.env.GEMINI_API_KEY ?? process.env.NEXT_PUBLIC_API_KEY;

export const client = new GoogleGenAI({ apiKey: IA_API_KEY });