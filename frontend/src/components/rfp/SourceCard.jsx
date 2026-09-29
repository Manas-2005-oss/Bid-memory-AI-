import {
  ArrowUpRight,
  FileText,
} from "lucide-react";

function SourceCard({
  source,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm">

      <div className="flex gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FileText size={16} />
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-2">

            <p className="text-xs font-semibold text-slate-800">
              {source.name}
            </p>

            <ArrowUpRight
              size={14}
              className="shrink-0 text-slate-400"
            />

          </div>

          <p className="mt-1 text-[11px] leading-4 text-slate-400">
            {source.description}
          </p>

        </div>

      </div>

    </div>
  );
}

export default SourceCard;