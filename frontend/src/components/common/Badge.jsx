const styles = {
  covered:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  partial:
    "bg-amber-50 text-amber-700 border-amber-200",

  missing:
    "bg-red-50 text-red-700 border-red-200",

  approved:
    "bg-blue-50 text-blue-700 border-blue-200",

  draft:
    "bg-slate-100 text-slate-600 border-slate-200",

  in_review:
    "bg-violet-50 text-violet-700 border-violet-200",

  won:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  lost:
    "bg-red-50 text-red-700 border-red-200",

  pending:
    "bg-amber-50 text-amber-700 border-amber-200",
};

const labels = {
  covered: "Covered",
  partial: "Partial",
  missing: "Missing",
  approved: "Approved",
  draft: "Draft",
  in_review: "In Review",
  won: "WON",
  lost: "LOST",
  pending: "PENDING",
};

function Badge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[status] || styles.draft
      }`}
    >
      {labels[status] || status}
    </span>
  );
}

export default Badge;