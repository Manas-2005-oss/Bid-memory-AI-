import { ShieldCheck } from "lucide-react";

function ConfidenceBadge({
  level = "high",
}) {
  const config = {
    high: {
      label: "High confidence",
      classes:
        "bg-emerald-50 text-emerald-700 border-emerald-200",
    },

    medium: {
      label: "Medium confidence",
      classes:
        "bg-amber-50 text-amber-700 border-amber-200",
    },

    low: {
      label: "Low confidence",
      classes:
        "bg-red-50 text-red-700 border-red-200",
    },
  };

  const item = config[level] || config.medium;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${item.classes}`}
    >
      <ShieldCheck size={13} />
      {item.label}
    </span>
  );
}

export default ConfidenceBadge;