import {
  ArrowUpRight,
  Brain,
  Search,
  Sparkles,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const memories = [
  {
    number: "01",
    category: "Implementation",
    title:
      "Customers respond better when implementation ownership is clearly defined.",
    sources: "7 source proposals",
    confidence: "94%",
    outcome: "Won",
  },
  {
    number: "02",
    category: "Security",
    title:
      "Security architecture becomes significantly stronger when controls are mapped directly to customer requirements.",
    sources: "11 source proposals",
    confidence: "91%",
    outcome: "Won",
  },
  {
    number: "03",
    category: "Customer Support",
    title:
      "Dedicated escalation paths consistently appear in successful enterprise proposals.",
    sources: "8 source proposals",
    confidence: "89%",
    outcome: "Won",
  },
  {
    number: "04",
    category: "Analytics",
    title:
      "Decision-makers respond better to measurable outcomes than feature-heavy descriptions.",
    sources: "6 source proposals",
    confidence: "86%",
    outcome: "Won",
  },
  {
    number: "05",
    category: "Compliance",
    title:
      "Compliance evidence performs better when the implementation process is shown alongside the certification.",
    sources: "9 source proposals",
    confidence: "83%",
    outcome: "Won",
  },
  {
    number: "06",
    category: "Data Migration",
    title:
      "Migration plans become more credible when risk mitigation and rollback procedures are explicitly described.",
    sources: "5 source proposals",
    confidence: "81%",
    outcome: "Won",
  },
];

export default function ProposalMemory() {
  const [search, setSearch] = useState("");

  const filteredMemories = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return memories;
    }

    return memories.filter((memory) =>
      `${memory.category} ${memory.title} ${memory.outcome}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[7%] top-[15%] h-80 w-80 rounded-full bg-[#315CFF]/[0.035] blur-3xl" />

        <div className="absolute right-[5%] top-[42%] h-96 w-96 rounded-full bg-[#5BD6E8]/[0.035] blur-3xl" />

        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-[#8B7CFF]/[0.025] blur-3xl" />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-24 md:px-10 md:pt-32">

        <div className="grid gap-14 lg:grid-cols-[1fr_350px]">

          {/* LEFT */}

          <div className="reveal">

            <div className="mb-8 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111318]">

                <Brain className="h-4 w-4 text-white" />

              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#315CFF]">
                Company Memory / 02
              </span>

            </div>


            <h1 className="page-title">

              What your
              <br />

              company already
              <br />

              <span className="text-[#315CFF]">
                knows.
              </span>

            </h1>


            <p className="reveal reveal-delay-1 mt-9 max-w-xl text-base leading-7 text-[#6E706D]">

              Every proposal leaves behind knowledge.
              Bid-Memory turns that knowledge into reusable
              organizational memory.

            </p>

          </div>


          {/* RIGHT */}

          <div className="reveal reveal-delay-2 self-end border-t border-[#D8D7D1] pt-6 lg:border-l lg:border-t-0 lg:pl-8">

            <div className="text-[10px] uppercase tracking-[0.2em] text-[#969792]">
              Memory system
            </div>


            <div className="mt-6 text-6xl font-medium tracking-[-0.07em]">
              1,284
            </div>


            <div className="mt-2 text-sm text-[#777871]">
              memories retained
            </div>


            <div className="mt-8 flex items-center gap-3">

              <span className="relative flex h-3 w-3">

                <span className="absolute inset-0 animate-ping rounded-full bg-[#315CFF]/30" />

                <span className="relative h-3 w-3 rounded-full bg-[#315CFF]" />

              </span>

              <span className="text-xs">
                Learning continuously
              </span>

            </div>


            <div className="mt-8 flex gap-8 border-t border-[#D8D7D1] pt-6">

              <div>

                <div className="text-2xl font-medium tracking-[-0.04em]">
                  86
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#969792]">
                  proposals
                </div>

              </div>


              <div>

                <div className="text-2xl font-medium tracking-[-0.04em]">
                  42
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#969792]">
                  patterns
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="relative border-y border-[#D8D7D1] bg-white/55 backdrop-blur-sm">

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">

          <div className="flex items-center gap-4 py-5">

            <Search className="h-4 w-4 shrink-0 text-[#8D8E89]" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search company memory..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#A0A19C]"
            />

            <span className="hidden whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-[#A0A19C] md:block">
              {filteredMemories.length} memories
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMORY LIST
      ===================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-20">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
              Knowledge archive
            </div>

            <div className="text-sm text-[#777871]">
              Learned from previous proposals and outcomes.
            </div>

          </div>


          <div className="hidden items-center gap-2 text-xs text-[#969792] md:flex">

            <Sparkles className="h-3.5 w-3.5 text-[#315CFF]" />

            AI-ranked memory

          </div>

        </div>


        {filteredMemories.length === 0 && (

          <div className="border-t border-[#D8D7D1] py-24 text-center">

            <Search className="mx-auto mb-5 h-6 w-6 text-[#9A9B96]" />

            <div className="text-xl tracking-[-0.03em]">
              No memories found.
            </div>

            <p className="mt-2 text-sm text-[#858680]">
              Try searching for another topic.
            </p>

          </div>

        )}


        {filteredMemories.map((memory, index) => (

          <div
            key={memory.number}
            className="group border-t border-[#D8D7D1] py-10 transition duration-500 hover:bg-white/35"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >

            <div className="grid gap-8 md:grid-cols-[70px_220px_1fr_150px]">

              {/* NUMBER */}

              <div className="pt-1 text-xs text-[#9A9B96]">
                {memory.number}
              </div>


              {/* CATEGORY */}

              <div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
                  {memory.category}
                </div>

                <div className="mt-4 text-xs text-[#858680]">
                  {memory.sources}
                </div>

              </div>


              {/* MEMORY */}

              <div>

                <p className="max-w-3xl text-2xl leading-[1.12] tracking-[-0.035em] transition duration-500 group-hover:translate-x-2 md:text-3xl">
                  {memory.title}
                </p>


                <Link
                  to="/insights"
                  className="editorial-link mt-7 text-xs text-[#777871] transition hover:text-[#315CFF]"
                >

                  Explore evidence

                  <ArrowUpRight className="h-3.5 w-3.5" />

                </Link>

              </div>


              {/* CONFIDENCE */}

              <div className="md:text-right">

                <div className="text-2xl font-medium tracking-[-0.04em]">
                  {memory.confidence}
                </div>

                <div className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#969792]">
                  confidence
                </div>

                <div className="mt-5 text-[9px] uppercase tracking-[0.15em] text-[#315CFF]">
                  {memory.outcome}
                </div>

              </div>

            </div>

          </div>

        ))}


        <div className="border-t border-[#D8D7D1]" />

      </section>


      {/* =====================================================
          MEMORY VISUAL
      ===================================================== */}

      <section className="relative border-t border-[#D8D7D1]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
                Memory network
              </div>

              <h2 className="section-title">
                Knowledge is
                <br />
                connected.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-6 text-[#777871]">
                Each memory can connect to multiple proposals,
                requirements, outcomes, and related patterns.
              </p>

            </div>


            {/* NETWORK */}

            <div className="relative min-h-[460px] overflow-hidden border border-[#D8D7D1] bg-white/30">

              {/* CENTRAL NODE */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="memory-pulse relative flex h-24 w-24 items-center justify-center rounded-full bg-[#111318] shadow-xl">

                  <Brain className="relative h-7 w-7 text-white" />

                </div>

              </div>


              {/* NODES */}

              <MemoryNode
                label="Security"
                position="left-[14%] top-[20%]"
              />

              <MemoryNode
                label="Compliance"
                position="right-[12%] top-[18%]"
              />

              <MemoryNode
                label="Implementation"
                position="left-[18%] bottom-[20%]"
              />

              <MemoryNode
                label="Analytics"
                position="right-[15%] bottom-[18%]"
              />


              {/* LINES */}

              <div className="absolute left-[28%] top-[34%] h-px w-[23%] rotate-[24deg] bg-[#315CFF]/25" />

              <div className="absolute right-[28%] top-[34%] h-px w-[23%] -rotate-[24deg] bg-[#315CFF]/25" />

              <div className="absolute bottom-[34%] left-[30%] h-px w-[21%] -rotate-[24deg] bg-[#315CFF]/20" />

              <div className="absolute bottom-[34%] right-[30%] h-px w-[21%] rotate-[24deg] bg-[#315CFF]/20" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL DARK SECTION
      ===================================================== */}

      <section className="relative bg-[#111318] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">

          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

            <div>

              <div className="mb-8 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#30333A]">

                  <Sparkles className="h-4 w-4 text-[#5BD6E8]" />

                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#5BD6E8]">
                  Organizational memory
                </span>

              </div>


              <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.065em] md:text-7xl">

                Your best proposal
                <br />

                should not disappear
                <br />

                <span className="text-[#5BD6E8]">
                  after it wins.
                </span>

              </h2>

            </div>


            <div className="border-t border-[#30333A] pt-7 lg:border-l lg:border-t-0 lg:pl-8">

              <p className="text-sm leading-7 text-[#A5A7AE]">
                Every accepted response can become new
                organizational memory — making the next
                proposal more informed than the last.
              </p>


              <Link
                to="/rfp/new"
                className="button-shine group relative mt-10 flex w-fit items-center gap-3 bg-white px-5 py-3 text-xs font-medium text-[#111318] transition duration-500 hover:bg-[#5BD6E8]"
              >

                <span className="relative z-10 text-[#111318]">
                  Start a new bid
                </span>

                <ArrowUpRight className="relative z-10 h-4 w-4 text-[#111318] transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


function MemoryNode({
  label,
  position,
}) {
  return (
    <div
      className={`absolute ${position} group`}
    >

      <div className="relative border border-[#D8D7D1] bg-[#F4F3EE]/90 px-4 py-2 text-xs backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:border-[#315CFF] group-hover:text-[#315CFF]">

        {label}

      </div>

    </div>
  );
}