
import { GoogleGenAI } from "@google/genai";
import { SESSIONS, EXHIBITORS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the official AI Assistant for the AI Impact Summit 2026 held at Bharat Mandapam, New Delhi.
Your goal is to help attendees navigate the event.
Here is the event data:
Sessions: ${JSON.stringify(SESSIONS)}
Exhibitors: ${JSON.stringify(EXHIBITORS)}

Guidelines:
1. Be helpful, professional, and welcoming.
2. If asked about schedules, suggest specific sessions based on user interest.
3. If asked about locations, mention Bharat Mandapam levels or hall numbers.
4. Keep responses concise and formatted in Markdown.
`;

export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently recharging its circuits. Please try again in a moment!";
  }
}
