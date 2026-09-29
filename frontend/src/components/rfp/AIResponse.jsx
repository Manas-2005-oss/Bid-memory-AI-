import {
  Check,
  Pencil,
  RefreshCw,
  Send,
} from "lucide-react";

import Button from "../common/Button";

function AIResponse({
  requirement,
  approved,
  onApprove,
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white">

      <div className="border-b border-slate-100 px-6 py-5">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Requirement {String(requirement.number).padStart(2, "0")}
            </p>

            <h2 className="mt-2 text-base font-bold leading-6 text-slate-900">
              {requirement.title}
            </h2>
          </div>

          {!approved && (
            <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
              AI DRAFT
            </span>
          )}

        </div>

      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">

        {!approved && (
          <div className="mb-5 rounded-xl border border-amber-100 bg-amber-50/60 p-3">
            <p className="text-[11px] font-semibold text-amber-800">
              AI-generated draft — requires human approval.
            </p>
          </div>
        )}

        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          Draft response
        </p>

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-5">

          <p className="text-sm leading-7 text-slate-700">
            {requirement.answer}
          </p>

        </div>

        <div className="mt-6">

          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Grounding
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            This response is grounded in retrieved organizational knowledge
            and approved historical proposal memory.
          </p>

        </div>

      </div>

      <div className="border-t border-slate-100 px-6 py-4">

        {approved ? (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            <Check size={17} />
            Response approved and added to memory
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3">

            <div className="flex gap-2">

              <Button variant="secondary" size="sm">
                <Pencil size={14} />
                Edit
              </Button>

              <Button variant="secondary" size="sm">
                <RefreshCw size={14} />
                Regenerate
              </Button>

              <Button variant="ghost" size="sm">
                <Send size={14} />
                Ask AI
              </Button>

            </div>

            <Button
              variant="success"
              size="sm"
              onClick={onApprove}
            >
              <Check size={14} />
              Approve Response
            </Button>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIResponse;