export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070812] px-5 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
        <div>
          © {new Date().getFullYear()} NOVA AI. All rights reserved.
        </div>

        <div className="flex gap-5">
          <a href="/" className="hover:text-white">
            Home
          </a>

          <a href="/tools" className="hover:text-white">
            Tools
          </a>

          <a href="/tools/image" className="hover:text-white">
            Images
          </a>
        </div>
      </div>
    </footer>
  );
}
