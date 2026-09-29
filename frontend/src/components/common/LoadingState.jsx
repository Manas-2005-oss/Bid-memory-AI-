import { LoaderCircle } from "lucide-react";

function LoadingState({
  message = "Loading...",
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">

      <LoaderCircle
        size={28}
        className="animate-spin text-blue-600"
      />

      <p className="mt-3 text-sm text-slate-500">
        {message}
      </p>

    </div>
  );
}

export default LoadingState;