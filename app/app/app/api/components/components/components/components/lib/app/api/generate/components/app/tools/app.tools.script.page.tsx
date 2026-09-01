"use client";

import GenerateTool from "@/components/GenerateTool";

export default function ScriptPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">🎬</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI Script Writer
          </h1>

          <p className="mt-3 text-gray-400">
            Create engaging scripts for YouTube, TikTok, Reels and more.
          </p>
        </div>

        <GenerateTool
          task="Professional Video Script Writer"
          title="🎬 Create Your Script"
          placeholder="Example: Write a 60-second motivational Instagram Reel about never giving up..."
        />
      </div>
    </main>
  );
}
