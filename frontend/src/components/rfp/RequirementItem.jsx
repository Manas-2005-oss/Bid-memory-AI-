import Badge from "../common/Badge";

function RequirementItem({
  requirement,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full border-b border-slate-100 p-4 text-left transition ${
        active
          ? "bg-blue-50/70"
          : "hover:bg-slate-50"
      }`}
    >

      <div className="flex items-start gap-3">

        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-500">
          {String(requirement.number).padStart(2, "0")}
        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold leading-5 text-slate-800">
            {requirement.title}
          </p>

          <div className="mt-2">
            <Badge status={requirement.status} />
          </div>

        </div>

      </div>

    </button>
  );
}

export default RequirementItem;