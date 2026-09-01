"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#070812] px-5 py-4 text-white">
      <div className="flex items-center gap-2">
        <span className="text-2xl">✦</span>
        <span className="text-xl font-bold">NOVA AI</span>
      </div>

      <nav className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
        <a href="/" className="hover:text-white">
          Home
        </a>

        <a href="/tools" className="hover:text-white">
          Tools
        </a>

        <a href="/tools/image" className="hover:text-white">
          Images
        </a>
      </nav>

      <button className="rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/10">
        ☰
      </button>
    </header>
  );
}
