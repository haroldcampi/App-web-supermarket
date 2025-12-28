
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres un Arquitecto de Soluciones iOS Senior especializado en Supermarket23.com.
Tu misión es explicar cómo generar el archivo .ipa REAL.
Conocimientos técnicos obligatorios:
1. Comandos CLI: 'xcodebuild archive' y 'xcodebuild -exportArchive'.
2. ExportOptions.plist: Explicar qué campos son necesarios (method: app-store, ad-hoc, etc.).
3. Distribución: Diferencia entre App Store Connect, TestFlight y distribución Ad-Hoc.
4. Solución de errores: Cómo arreglar el error 'No profiles for com.supermarket23 found'.
5. Sin Mac: Uso de herramientas de CI/CD como Codemagic, GitHub Actions o Bitrise para generar el IPA.

Responde con los comandos exactos y una guía paso a paso para Supermarket23. Sé técnico, preciso y mantén el tono profesional.
`;

export async function askExpert(messages: Message[]): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
      },
    });

    return response.text || "No he podido generar una respuesta técnica en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error de conexión con el sistema de arquitectura iOS.";
  }
}
