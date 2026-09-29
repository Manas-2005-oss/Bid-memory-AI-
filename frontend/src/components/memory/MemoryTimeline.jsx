function MemoryTimeline({ items }) {
  return (
    <div className="space-y-5">

      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative flex gap-4"
        >

          {index !== items.length - 1 && (
            <span className="absolute left-[7px] top-5 h-full w-px bg-slate-200" />
          )}

          <span className="relative mt-1 h-4 w-4 shrink-0 rounded-full border-4 border-blue-100 bg-blue-600" />

          <div>

            <p className="text-xs font-bold text-slate-800">
              {item.title}
            </p>

            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              {item.description}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}

export default MemoryTimeline;