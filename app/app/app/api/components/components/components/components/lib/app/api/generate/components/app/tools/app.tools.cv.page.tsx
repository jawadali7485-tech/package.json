"use client";

import GenerateTool from "@/components/GenerateTool";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#070812] px-5 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="text-5xl">📄</div>

          <h1 className="mt-4 text-4xl font-bold">
            NOVA AI CV Builder
          </h1>

          <p className="mt-3 text-gray-400">
            Create a professional, ATS-friendly CV from your information.
          </p>
        </div>

        <GenerateTool
          task="Professional ATS-Friendly CV / Resume"
          title="📄 Create Your CV"
          placeholder="Example: I am a truck driver with 5 years of experience. Include my skills, experience, education and certifications..."
        />
      </div>
    </main>
  );
}
