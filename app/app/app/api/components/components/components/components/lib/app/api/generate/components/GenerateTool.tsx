"use client";

import { useState } from "react";

type Props = {
  task: string;
  title: string;
  placeholder?: string;
};

export default function GenerateTool({
  task,
  title,
  placeholder = "Tell NOVA what you need...",
}: Props) {
  const [request, setRequest] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!request.trim() || loading) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task,
          request,
        }),
      });

      const data = await response.json();

      setResult(
        data.result ||
          data.error ||
          "Something went wrong. Please try again."
      );
    } catch {
      setResult("Unable to connect to NOVA AI.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>

      <textarea
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder={placeholder}
        rows={7}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
      />

      <button
        onClick={generate}
        disabled={loading || !request.trim()}
        className="mt-4 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "NOVA is working..." : "Generate"}
      </button>

      {result && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="mb-3 text-sm font-semibold text-purple-400">
            NOVA AI Result
          </div>

          <div className="whitespace-pre-wrap leading-7 text-gray-200">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
