import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ERROR_MESSAGE_500 = {
  error: "Erro ao gerar bio. Verifique sua chave ou modelo.",
};
const MODEL = "gemini-2.0-flash";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  const { name, profession } = await req.json();

  try {
    const prompt = `Crie algumas bios criativa para Instagram com:
    - Nome: ${name}
    - Profissão: ${profession}
    Limite de 150 caracteres. E cada uma em um paragrafo separado.`;

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
    });

    const text = result.text?.split("\n").filter((bio) => bio.trim() !== "");

    return NextResponse.json({ bio: text });
  } catch (err) {
    return NextResponse.json(ERROR_MESSAGE_500, { status: 500 });
  }
}
