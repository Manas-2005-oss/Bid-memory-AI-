export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="border border-[#D8D7D1] bg-white/60 p-6">
      <p className="text-sm text-[#777871]">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 text-sm font-semibold text-[#315CFF]"
        >
          Try again →
        </button>
      )}
    </div>
  );
}