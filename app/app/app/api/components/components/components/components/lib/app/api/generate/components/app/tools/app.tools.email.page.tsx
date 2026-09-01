"use client";

import GenerateTool from "@/components/GenerateTool";

export default function EmailPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">✉️</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI Email Writer
          </h1>

          <p className="mt-3 text-gray-400">
            Create professional emails in seconds.
          </p>
        </div>

        <GenerateTool
          task="Professional Email Writer"
          title="✉️ Write an Email"
          placeholder="Example: Write a professional email to a company asking about a truck driver job..."
        />
      </div>
    </main>
  );
}
