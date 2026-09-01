"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const tools = [
  ["💬", "Ask anything"],
  ["🎨", "Create image"],
  ["💡", "Give me ideas"],
  ["✍️", "Write a prompt"],
  ["🎬", "Write a script"],
  ["📄", "Create my CV"],
  ["✉️", "Write an email"],
  ["📎", "Analyze a PDF"],
];

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const text = input.trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            data.message ||
            data.error ||
            "Something went wrong. Please try again.",
        },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Connection error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070812] text-white">
      <header className="border-b border-white/10 px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">✦ NOVA AI</h1>
            <p className="text-xs text-gray-500">
              Ask. Create. Get It Done.
            </p>
          </div>

          <button
            onClick={() => setMessages([])}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
          >
            New Chat
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-8">
        {messages.length === 0 ? (
          <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <div className="mb-5 text-5xl">✦</div>

            <h2 className="text-4xl font-bold md:text-6xl">
              What can I help you create?
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Chat, create images, generate ideas, write prompts and
              scripts, build CVs, write emails and much more.
            </p>

            <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {tools.map(([icon, name]) => (
                <button
                  key={name}
                  onClick={() => setInput(name)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                >
                  <span className="mr-2">{icon}</span>
                  {name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5 py-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-purple-600 px-5 py-4"
                    : "mr-auto max-w-[85%] rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                }
              >
                <div className="mb-2 text-xs text-gray-300">
                  {message.role === "user" ? "You" : "NOVA AI"}
                </div>

                <div className="whitespace-pre-wrap leading-7">
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-gray-400">
                NOVA is thinking...
              </div>
            )}
          </div>
        )}
      </section>

      <footer className="sticky bottom-0 border-t border-white/10 bg-[#070812]/95 p-4 backdrop-blur">
        <div className="mx-auto flex max-w-5xl gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask NOVA anything..."
            className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-gray-600"
          />

          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold disabled:opacity-40"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>

        <p className="mt-2 text-center text-[11px] text-gray-600">
          NOVA AI can make mistakes. Verify important information.
        </p>
      </footer>
    </main>
  );
}
