import {
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

const bids = [
  {
    number: "01",
    title: "Enterprise Cloud Migration",
    client: "Acme Corporation",
    value: "₹1.8 Cr",
  },
  {
    number: "02",
    title: "Government Digital Platform",
    client: "Nova Systems",
    value: "₹2.4 Cr",
  },
  {
    number: "03",
    title: "AI Infrastructure Modernization",
    client: "Vertex Labs",
    value: "₹0.6 Cr",
  },
];

export default function Dashboard() {
  return (
    <div className="editorial-grid overflow-hidden">
      {/* ======================================= */}
      {/* HERO */}
      {/* ======================================= */}

      <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-24 md:px-10 md:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="reveal">
            <div className="mb-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#315CFF]" />

              <span className="text-[11px] uppercase tracking-[0.2em] text-[#777871]">
                Organizational intelligence
              </span>
            </div>

            <h1 className="display-title max-w-[1100px]">
              Your company's
              <br />

              <span className="text-[#315CFF]">
                past bids
              </span>{" "}
              are still talking.
            </h1>

            <div className="mt-14 grid max-w-[850px] gap-8 md:grid-cols-[1fr_1fr]">
              <p className="text-lg leading-8 text-[#5F625F]">
                Bid-Memory turns your proposal history into institutional
                intelligence — so every new bid starts with everything your
                company has already learned.
              </p>

              <div className="flex items-end">
                <Link
                  to="/rfp/new"
                  className="editorial-link flex items-center gap-3 text-sm font-medium text-[#111318]"
                >
                  Start a new bid

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero numbers */}

          <div className="flex flex-col justify-end border-l border-[#D8D7D1] pl-7">
            <Stat number="1,284" label="memories connected" />
            <Stat number="86" label="proposals learned from" />
            <Stat number="42" label="patterns discovered" />
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* MEMORY INSIGHT */}
      {/* ======================================= */}

      <section className="border-y border-[#D8D7D1] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#315CFF]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777871]">
                  What did we learn?
                </span>
              </div>

              <div className="mt-8 text-[12px] uppercase tracking-[0.16em] text-[#A0A19C]">
                Memory signal / 042
              </div>
            </div>

            <div>
              <h2 className="section-title max-w-[1000px]">
                Enterprise clients repeatedly value{" "}
                <span className="text-[#315CFF]">
                  implementation support
                </span>{" "}
                over feature count.
              </h2>

              <div className="mt-12 flex flex-wrap gap-12 border-t border-[#D8D7D1] pt-7">
                <div>
                  <div className="text-2xl font-medium">
                    94%
                  </div>

                  <div className="mt-1 text-xs text-[#777871]">
                    confidence
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-medium">
                    7
                  </div>

                  <div className="mt-1 text-xs text-[#777871]">
                    supporting proposals
                  </div>
                </div>

                <Link
                  to="/memory"
                  className="editorial-link flex items-center gap-2 text-xs font-medium"
                >
                  Explore this memory
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* MEMORY GRAPH */}
      {/* ======================================= */}

      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#777871]">
              02 / Company memory
            </span>
          </div>

          <h2 className="section-title max-w-[900px]">
            Every proposal leaves something behind.
          </h2>
        </div>

        <MemoryVisualization />
      </section>

      {/* ======================================= */}
      {/* ACTIVE BIDS */}
      {/* ======================================= */}

      <section className="border-t border-[#D8D7D1] bg-[#111318] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9DA0A8]">
                03 / Active bids
              </span>

              <p className="mt-5 max-w-[250px] text-sm leading-6 text-[#8A8D95]">
                Current proposals, already connected to everything your
                organization knows.
              </p>
            </div>

            <div>
              {bids.map((bid) => (
                <Link
                  key={bid.number}
                  to="/rfp/rfp-001"
                  className="group grid grid-cols-[60px_1fr_auto] items-center gap-5 border-t border-white/15 py-8 transition hover:bg-white/[0.025]"
                >
                  <span className="text-xs text-[#777A83]">
                    {bid.number}
                  </span>

                  <div>
                    <div className="text-xl font-medium tracking-tight md:text-3xl">
                      {bid.title}
                    </div>

                    <div className="mt-2 text-xs text-[#777A83]">
                      {bid.client}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden text-sm text-[#9DA0A8] md:block">
                      {bid.value}
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-[#777A83] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* FOOTER STATEMENT */}
      {/* ======================================= */}

      <section className="bg-[#315CFF] px-6 py-28 text-white md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display-title max-w-[1100px]">
            Don't start your next bid
            <br />
            from zero.
          </h2>

          <Link
            to="/rfp/new"
            className="mt-14 inline-flex items-center gap-3 border border-white/40 px-6 py-4 text-sm transition hover:bg-white hover:text-[#315CFF]"
          >
            Build with your company's memory

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="border-t border-[#D8D7D1] py-5">
      <div className="text-3xl font-medium tracking-tight">
        {number}
      </div>

      <div className="mt-1 text-xs text-[#777871]">
        {label}
      </div>
    </div>
  );
}

function MemoryVisualization() {
  return (
    <div className="relative min-h-[500px] overflow-hidden border border-[#D8D7D1] bg-white">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-[20%] top-[25%] h-px w-[60%] rotate-[8deg] bg-[#BFC7D8]" />
        <div className="absolute left-[30%] top-[55%] h-px w-[50%] -rotate-[15deg] bg-[#BFC7D8]" />
        <div className="absolute left-[45%] top-[30%] h-[55%] w-px rotate-[15deg] bg-[#BFC7D8]" />
      </div>

      <MemoryNode
        left="20%"
        top="25%"
        label="Pricing"
      />

      <MemoryNode
        left="30%"
        top="60%"
        label="Security"
      />

      <MemoryNode
        left="50%"
        top="43%"
        label="Implementation"
        main
      />

      <MemoryNode
        left="70%"
        top="25%"
        label="SLA"
      />

      <MemoryNode
        left="80%"
        top="62%"
        label="Support"
      />

      <div className="absolute bottom-7 left-7 flex items-center gap-3">
        <Brain className="h-4 w-4 text-[#315CFF]" />

        <span className="text-xs text-[#777871]">
          1,284 memories connected
        </span>
      </div>

      <div className="absolute right-7 top-7 text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#A0A19C]">
          Live memory graph
        </div>

        <div className="mt-2 text-xs text-[#777871]">
          Continuously learning
        </div>
      </div>
    </div>
  );
}

function MemoryNode({
  left,
  top,
  label,
  main = false,
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top,
      }}
    >
      {main && (
        <div className="absolute -inset-7 rounded-full border border-[#315CFF]/20 memory-pulse" />
      )}

      <div
        className={`relative flex items-center justify-center rounded-full ${
          main
            ? "h-24 w-24 bg-[#315CFF] text-white"
            : "h-12 w-12 border border-[#C7CDD8] bg-white"
        }`}
      >
        {main ? (
          <Brain className="h-8 w-8" />
        ) : (
          <span className="h-2.5 w-2.5 rounded-full bg-[#315CFF]" />
        )}
      </div>

      <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-wider text-[#777871]">
        {label}
      </div>
    </div>
  );
}