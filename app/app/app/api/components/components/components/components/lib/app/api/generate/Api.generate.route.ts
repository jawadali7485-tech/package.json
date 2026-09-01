import { openai, NOVA_SYSTEM_PROMPT } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { task, request } = await req.json();

    if (!request || typeof request !== "string") {
      return NextResponse.json(
        { error: "Please provide a request." },
        { status: 400 }
      );
    }

    if (!openai) {
      return NextResponse.json(
        { error: "AI API key is not configured." },
        { status: 500 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5",
      instructions: `${NOVA_SYSTEM_PROMPT}

The selected tool is: ${task || "General Assistant"}.

Return a polished, ready-to-use result.
Do not add unnecessary explanations.`,
      input: request,
    });

    return NextResponse.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("Generation error:", error);

    return NextResponse.json(
      { error: "Unable to generate the requested content." },
      { status: 500 }
    );
  }
}
