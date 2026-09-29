import { Search, X } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative">

      <Search
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-10 w-full rounded-xl
          border border-slate-200
          bg-white
          pl-10 pr-9
          text-sm text-slate-700
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-blue-300
          focus:ring-4 focus:ring-blue-50
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          <X size={15} />
        </button>
      )}

    </div>
  );
}

export default SearchBar;