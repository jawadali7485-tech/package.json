type ToolCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ToolCard({
  icon,
  title,
  description,
  onClick,
}: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
        {icon}
      </div>

      <h3 className="text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {description}
      </p>

      <div className="mt-4 text-sm font-medium text-purple-400 group-hover:text-purple-300">
        Open →
      </div>
    </button>
  );
}
