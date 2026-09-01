"use client";

import GenerateTool from "@/components/GenerateTool";

export default function IdeasPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">💡</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI Idea Generator
          </h1>

          <p className="mt-3 text-gray-400">
            Turn simple thoughts into useful and creative ideas.
          </p>
        </div>

        <GenerateTool
          task="Creative Idea Generator"
          title="💡 Generate Ideas"
          placeholder="Example: Give me 10 YouTube Shorts ideas about motivation that can go viral..."
        />
      </div>
    </main>
  );
}
