"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
  loading?: boolean;
};

export default function ChatBox({ onSend, loading = false }: Props) {
  const [message, setMessage] = useState("");

  function handleSend() {
    const text = message.trim();

    if (!text || loading) return;

    onSend(text);
    setMessage("");
  }

  return (
    <div className="flex w-full gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Ask NOVA anything..."
        disabled={loading}
        className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
      />

      <button
        onClick={handleSend}
        disabled={loading || !message.trim()}
        className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
