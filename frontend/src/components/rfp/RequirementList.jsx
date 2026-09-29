import CoverageBar from "./CoverageBar";
import RequirementItem from "./RequirementItem";

function RequirementList({
  requirements,
  activeId,
  onSelect,
}) {
  const covered = requirements.filter(
    (item) => item.status === "covered"
  ).length;

  const coverage = Math.round(
    (covered / requirements.length) * 100
  );

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <div className="border-b border-slate-100 p-5">

        <h2 className="text-sm font-bold text-slate-900">
          Requirements
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {covered} of {requirements.length} covered
        </p>

        <div className="mt-4">
          <CoverageBar value={coverage} />
        </div>

      </div>

      <div className="flex-1 overflow-y-auto">

        {requirements.map((requirement) => (
          <RequirementItem
            key={requirement.id}
            requirement={requirement}
            active={activeId === requirement.id}
            onClick={() => onSelect(requirement)}
          />
        ))}

      </div>

    </div>
  );
}

export default RequirementList;