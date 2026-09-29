export default function Loading({
  label = "Loading...",
}) {
  return (
    <div className="flex items-center gap-3 py-8">
      <div className="h-2 w-2 animate-pulse rounded-full bg-[#315CFF]" />

      <span className="text-sm text-[#777871]">
        {label}
      </span>
    </div>
  );
}