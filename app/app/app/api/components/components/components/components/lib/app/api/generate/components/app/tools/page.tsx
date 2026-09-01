"use client";

import GenerateTool from "@/components/GenerateTool";

export default function CoverLetterPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">📝</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI Cover Letter
          </h1>

          <p className="mt-3 text-gray-400">
            Create a customized and professional cover letter for any job.
          </p>
        </div>

        <GenerateTool
          task="Professional Cover Letter Writer"
          title="📝 Create Your Cover Letter"
          placeholder="Example: Create a cover letter for a truck driver position in a European logistics company. I have 5 years of experience..."
        />
      </div>
    </main>
  );
}
