import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Please provide an image prompt." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "AI API key is not configured." },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const image = result.data?.[0];

    if (!image?.b64_json) {
      return NextResponse.json(
        { error: "Image generation failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: `data:image/png;base64,${image.b64_json}`,
    });
  } catch (error) {
    console.error("Image generation error:", error);

    return NextResponse.json(
      { error: "Unable to generate image." },
      { status: 500 }
    );
  }
}
