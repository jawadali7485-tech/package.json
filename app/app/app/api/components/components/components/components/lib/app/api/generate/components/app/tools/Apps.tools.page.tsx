"use client";

import { useState } from "react";
import GenerateTool from "@/components/GenerateTool";

const tools = [
  {
    id: "ideas",
    icon: "💡",
    title: "Idea Generator",
    description: "Generate creative and practical ideas.",
  },
  {
    id: "prompt",
    icon: "✍️",
    title: "Prompt Generator",
    description: "Create powerful AI prompts.",
  },
  {
    id: "script",
    icon: "🎬",
    title: "Script Writer",
    description: "Create YouTube, TikTok and Reels scripts.",
  },
  {
    id: "cv",
    icon: "📄",
    title: "CV / Resume",
    description: "Create a professional CV or resume.",
  },
  {
    id: "cover-letter",
    icon: "📝",
    title: "Cover Letter",
    description: "Write a customized cover letter.",
  },
  {
    id: "email",
    icon: "✉️",
    title: "Email Writer",
    description: "Write professional emails instantly.",
  },
];

export default function ToolsPage() {
  const [selected, setSelected] = useState(tools[0]);

  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">NOVA AI Tools</h1>
          <p className="mt-3 text-gray-400">
            Choose a tool and let NOVA do the work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setSelected(tool)}
              className={`rounded-2xl border p-5 text-left transition ${
                selected.id === tool.id
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="text-3xl">{tool.icon}</div>
              <h2 className="mt-4 font-semibold">{tool.title}</h2>
              <p className="mt-2 text-sm text-gray-400">
                {tool.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10">
          <GenerateTool
            task={selected.title}
            title={`${selected.icon} ${selected.title}`}
            placeholder={`Tell NOVA what you want for your ${selected.title.toLowerCase()}...`}
          />
        </div>
      </div>
    </main>
  );
}
