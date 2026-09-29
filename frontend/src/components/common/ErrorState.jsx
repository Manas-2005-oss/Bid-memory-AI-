import { AlertCircle, RefreshCw } from "lucide-react";

function ErrorState({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/40 p-8 text-center">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
        <AlertCircle size={22} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-800">
        Unable to load
      </h3>

      <p className="mt-1 max-w-sm text-xs text-slate-500">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
        >
          <RefreshCw size={13} />
          Try again
        </button>
      )}

    </div>
  );
}

export default ErrorState;