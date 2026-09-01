export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-3 py-6 text-gray-400">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-purple-500" />

      <span>NOVA AI is thinking...</span>
    </div>
  );
}
