import {
  Brain,
  CheckCircle2,
} from "lucide-react";

import ConfidenceBadge from "./ConfidenceBadge";
import SourceCard from "./SourceCard";

function EvidencePanel({
  memories,
  sources,
  confidence = "high",
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white">

      <div className="border-b border-slate-100 px-5 py-5">

        <div className="flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Brain size={16} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Memory & Evidence
            </h2>

            <p className="text-[10px] text-slate-400">
              Retrieved organizational knowledge
            </p>
          </div>

        </div>

      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-5">

        <div>

          <div className="mb-3 flex items-center justify-between">

            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Hindsight Memory
            </p>

            <span className="text-[10px] font-semibold text-violet-600">
              {memories.length} found
            </span>

          </div>

          {memories.map((memory) => (
            <div
              key={memory.id}
              className="rounded-xl border border-violet-100 bg-violet-50/40 p-4"
            >

              <p className="text-xs font-bold text-slate-800">
                {memory.title}
              </p>

              <div className="mt-2 flex gap-2">

                <span className="rounded-md bg-emerald-100 px-2 py-1 text-[9px] font-bold text-emerald-700">
                  {memory.outcome}
                </span>

                <span className="rounded-md bg-white px-2 py-1 text-[9px] font-medium text-slate-500 ring-1 ring-slate-200">
                  {memory.industry}
                </span>

              </div>

              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                {memory.lesson}
              </p>

            </div>
          ))}

        </div>

        <div>

          <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Confidence
          </p>

          <ConfidenceBadge level={confidence} />

        </div>

        <div>

          <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Sources
          </p>

          <div className="space-y-2">

            {sources.map((source) => (
              <SourceCard
                key={source.id}
                source={source}
              />
            ))}

          </div>

        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">

          <div className="flex gap-2">

            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-emerald-600"
            />

            <div>

              <p className="text-xs font-semibold text-emerald-800">
                Grounded response
              </p>

              <p className="mt-1 text-[10px] leading-4 text-emerald-700">
                Claims shown above are supported by retrieved evidence.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EvidencePanel;