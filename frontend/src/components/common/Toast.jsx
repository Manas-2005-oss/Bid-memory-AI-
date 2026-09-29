import {
  CheckCircle2,
  X,
} from "lucide-react";

function Toast({
  message,
  onClose,
}) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[110] flex max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-3 shadow-xl">

      <CheckCircle2
        size={18}
        className="text-emerald-500"
      />

      <span className="text-sm font-medium text-slate-700">
        {message}
      </span>

      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-700"
      >
        <X size={15} />
      </button>

    </div>
  );
}

export default Toast;