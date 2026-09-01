"use client";

import GenerateTool from "@/components/GenerateTool";

export default function PromptPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">✍️</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI Prompt Generator
          </h1>

          <p className="mt-3 text-gray-400">
            Turn your simple idea into a powerful AI prompt.
          </p>
        </div>

        <GenerateTool
          task="Professional AI Prompt Generator"
          title="✍️ Create Your Prompt"
          placeholder="Example: Create a cinematic prompt for a futuristic city at night..."
        />
      </div>
    </main>
  );
}
