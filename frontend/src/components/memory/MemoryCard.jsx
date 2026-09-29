import {
  CalendarDays,
  FileText,
  Tag,
} from "lucide-react";

import Badge from "../common/Badge";

function MemoryCard({ memory }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40">

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <FileText size={17} />
          </div>

          <div>

            <p className="text-sm font-bold leading-5 text-slate-900">
              {memory.question}
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              {memory.client} · {memory.industry}
            </p>

          </div>

        </div>

        <Badge status={memory.outcome} />

      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">

        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          Approved answer
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-600">
          {memory.answer}
        </p>

      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <FileText size={12} />
          {memory.source}
        </div>

        <span className="text-slate-300">·</span>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <CalendarDays size={12} />
          {memory.date}
        </div>

        {memory.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500"
          >
            <Tag size={10} />
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
}

export default MemoryCard;