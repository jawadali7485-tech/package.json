"use client";

type SidebarProps = {
  onNewChat?: () => void;
};

export default function Sidebar({ onNewChat }: SidebarProps) {
  const menu = [
    ["💬", "New Chat"],
    ["🎨", "Images"],
    ["💡", "Ideas"],
    ["✍️", "Prompts"],
    ["🎬", "Scripts"],
    ["📄", "CV / Resume"],
    ["✉️", "Email"],
    ["📎", "Files"],
  ];

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/10 bg-[#090B14] p-4 md:block">
      <div className="mb-8 px-2">
        <div className="text-xl font-bold">✦ NOVA AI</div>
        <div className="mt-1 text-xs text-gray-500">
          Ask. Create. Get It Done.
        </div>
      </div>

      <nav className="space-y-2">
        {menu.map(([icon, label]) => (
          <button
            key={label}
            onClick={label === "New Chat" ? onNewChat : undefined}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 border-t border-white/10 pt-6">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-400 hover:bg-white/10 hover:text-white">
          ⚙️
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
