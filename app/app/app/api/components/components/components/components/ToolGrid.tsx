"use client";

import ToolCard from "./ToolCard";

const tools = [
  {
    icon: "🎨",
    title: "Image Generator",
    description: "Create high-quality AI images from your ideas.",
  },
  {
    icon: "💡",
    title: "Idea Generator",
    description: "Get creative ideas for business, content and projects.",
  },
  {
    icon: "✍️",
    title: "Prompt Generator",
    description: "Create powerful prompts for AI tools.",
  },
  {
    icon: "🎬",
    title: "Script Writer",
    description: "Write scripts for YouTube, Reels, TikTok and more.",
  },
  {
    icon: "📄",
    title: "CV / Resume",
    description: "Create a professional CV or resume.",
  },
  {
    icon: "📝",
    title: "Cover Letter",
    description: "Generate a customized professional cover letter.",
  },
  {
    icon: "✉️",
    title: "Email Writer",
    description: "Write clear and professional emails instantly.",
  },
  {
    icon: "📎",
    title: "File Analyzer",
    description: "Upload files and ask NOVA AI questions about them.",
  },
];

export default function ToolGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          What can NOVA do?
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Choose a tool or simply tell NOVA what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>
    </section>
  );
}
