import { Brain, Database, FileText, Sparkles } from "lucide-react";

const nodes = [
  { x: "18%", y: "28%", label: "Pricing", size: "small" },
  { x: "30%", y: "65%", label: "Security", size: "small" },
  { x: "50%", y: "42%", label: "Implementation", size: "large" },
  { x: "70%", y: "25%", label: "SLA", size: "small" },
  { x: "82%", y: "63%", label: "Support", size: "small" },
];

export default function MemoryCore() {
  return (
    <div className="relative h-[410px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d131d]">
      {/* Background */}

      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* Header */}

      <div className="absolute left-6 top-6 z-10">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-[#7da2ff]" />

          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Memory Intelligence
          </span>
        </div>

        <p className="mt-2 max-w-[280px] text-xs leading-5 text-slate-600">
          Your company's bidding knowledge, connected and continuously learning.
        </p>
      </div>

      {/* Connections */}

      <svg className="absolute inset-0 h-full w-full opacity-30">
        <line
          x1="18%"
          y1="28%"
          x2="50%"
          y2="42%"
          stroke="#6b96ff"
          strokeWidth="1"
        />

        <line
          x1="30%"
          y1="65%"
          x2="50%"
          y2="42%"
          stroke="#6b96ff"
          strokeWidth="1"
        />

        <line
          x1="50%"
          y1="42%"
          x2="70%"
          y2="25%"
          stroke="#45d6ff"
          strokeWidth="1"
        />

        <line
          x1="50%"
          y1="42%"
          x2="82%"
          y2="63%"
          stroke="#6b96ff"
          strokeWidth="1"
        />
      </svg>

      {/* Nodes */}

      {nodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {node.size === "large" && (
            <div className="absolute -inset-8 animate-pulse rounded-full border border-blue-400/10" />
          )}

          <div
            className={`relative flex items-center justify-center rounded-full border ${
              node.size === "large"
                ? "h-24 w-24 border-blue-400/30 bg-[#14213a] shadow-[0_0_60px_rgba(91,140,255,0.15)]"
                : "h-12 w-12 border-white/10 bg-[#111925]"
            }`}
          >
            {node.size === "large" ? (
              <Brain className="h-8 w-8 text-[#7da2ff]" />
            ) : (
              <div className="h-2 w-2 rounded-full bg-[#6b96ff] shadow-[0_0_12px_#6b96ff]" />
            )}
          </div>

          <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] text-slate-600">
            {node.label}
          </div>
        </div>
      ))}

      {/* Stats */}

      <div className="absolute bottom-5 left-5 right-5 flex gap-2">
        <div className="rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2">
          <div className="text-sm font-semibold text-white">1,284</div>
          <div className="text-[9px] uppercase tracking-wider text-slate-600">
            Memories
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2">
          <div className="text-sm font-semibold text-white">86</div>
          <div className="text-[9px] uppercase tracking-wider text-slate-600">
            Bids
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] px-3 py-2">
          <Database className="h-3.5 w-3.5 text-emerald-400" />

          <span className="text-[10px] text-emerald-300">
            Learning
          </span>
        </div>
      </div>
    </div>
  );
}