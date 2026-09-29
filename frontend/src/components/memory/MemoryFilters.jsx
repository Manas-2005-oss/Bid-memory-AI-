function MemoryFilters({
  outcome,
  industry,
  onOutcomeChange,
  onIndustryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">

      <select
        value={outcome}
        onChange={(e) =>
          onOutcomeChange(e.target.value)
        }
        className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 outline-none focus:border-blue-300"
      >
        <option value="all">All outcomes</option>
        <option value="won">Won</option>
        <option value="lost">Lost</option>
        <option value="pending">Pending</option>
      </select>

      <select
        value={industry}
        onChange={(e) =>
          onIndustryChange(e.target.value)
        }
        className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 outline-none focus:border-blue-300"
      >
        <option value="all">All industries</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Technology">Technology</option>
        <option value="Energy">Energy</option>
      </select>

    </div>
  );
}

export default MemoryFilters;