import {
  ArrowUpRight,
  Brain,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

const topics = [
  {
    name: "Security",
    count: 21,
    width: "100%",
  },
  {
    name: "Privacy",
    count: 18,
    width: "86%",
  },
  {
    name: "Implementation",
    count: 17,
    width: "81%",
  },
  {
    name: "Compliance",
    count: 15,
    width: "71%",
  },
  {
    name: "Customer Support",
    count: 12,
    width: "57%",
  },
];

const outcomes = [
  {
    label: "Won",
    value: "68%",
    width: "68%",
  },
  {
    label: "Shortlisted",
    value: "19%",
    width: "19%",
  },
  {
    label: "Lost",
    value: "13%",
    width: "13%",
  },
];

export default function Insights() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[3%] top-[15%] h-80 w-80 rounded-full bg-[#315CFF]/[0.035] blur-3xl" />

        <div className="absolute right-[5%] top-[40%] h-96 w-96 rounded-full bg-[#5BD6E8]/[0.035] blur-3xl" />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-24 md:px-10 md:pt-32">

        <div className="reveal">

          <div className="mb-8 flex items-center gap-3">

            <TrendingUp className="h-4 w-4 text-[#315CFF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#315CFF]">
              Proposal Intelligence / 03
            </span>

          </div>


          <h1 className="page-title">

            Your proposal
            <br />

            history has
            <br />

            <span className="text-[#315CFF]">
              patterns.
            </span>

          </h1>


          <p className="reveal reveal-delay-1 mt-9 max-w-2xl text-base leading-7 text-[#6E706D]">

            Bid-Memory analyzes what repeatedly appears in
            your proposals, connects those signals to outcomes,
            and turns them into reusable strategic knowledge.

          </p>

        </div>

      </section>


      {/* =====================================================
          KPI STRIP
      ===================================================== */}

      <section className="relative border-y border-[#D8D7D1] bg-white/55 backdrop-blur-sm">

        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">

          <KPI
            value="86"
            label="proposals analyzed"
          />

          <KPI
            value="42"
            label="winning patterns"
          />

          <KPI
            value="94%"
            label="memory confidence"
            last
          />

        </div>

      </section>


      {/* =====================================================
          TOPICS
      ===================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT */}

          <div>

            <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
              01 / Frequently requested
            </div>

            <h2 className="section-title">

              What buyers
              <br />

              keep asking for.

            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-[#777871]">

              These topics appear repeatedly across your
              historical proposals and form part of your
              organization's reusable knowledge base.

            </p>

          </div>


          {/* RIGHT */}

          <div>

            {topics.map((topic, index) => (

              <div
                key={topic.name}
                className="group border-t border-[#D8D7D1] py-7"
              >

                <div className="mb-4 flex items-end justify-between">

                  <div className="text-xl tracking-[-0.025em] transition duration-500 group-hover:translate-x-2 group-hover:text-[#315CFF]">

                    {topic.name}

                  </div>

                  <div className="text-xs text-[#858680]">
                    {topic.count}
                  </div>

                </div>


                <div className="progress-line">

                  <div
                    className="progress-line-fill"
                    style={{
                      width: topic.width,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />

                </div>

              </div>

            ))}

            <div className="border-t border-[#D8D7D1]" />

          </div>

        </div>

      </section>


      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className="relative border-t border-[#D8D7D1]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
                02 / Proposal outcomes
              </div>

              <h2 className="section-title">
                What happened
                <br />
                after the pitch.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-6 text-[#777871]">
                Bid-Memory connects proposal content with
                recorded outcomes so recurring signals can
                become organizational knowledge.
              </p>

            </div>


            <div>

              {outcomes.map((item) => (

                <div
                  key={item.label}
                  className="border-t border-[#D8D7D1] py-8"
                >

                  <div className="mb-4 flex items-center justify-between">

                    <span className="text-xl tracking-[-0.025em]">
                      {item.label}
                    </span>

                    <span className="text-2xl font-medium tracking-[-0.04em]">
                      {item.value}
                    </span>

                  </div>


                  <div className="h-[3px] overflow-hidden bg-[#E2E2DC]">

                    <div
                      className="h-full bg-[#111318] transition-all duration-1000"
                      style={{
                        width: item.width,
                      }}
                    />

                  </div>

                </div>

              ))}

              <div className="border-t border-[#D8D7D1]" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          AI DISCOVERY
      ===================================================== */}

      <section className="relative bg-[#111318] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">

          <div className="ai-scan relative border border-[#30333A] p-8 md:p-16">

            <div className="grid gap-14 lg:grid-cols-[1fr_280px]">

              {/* MAIN */}

              <div>

                <div className="mb-10 flex items-center gap-4">

                  <div className="memory-pulse relative flex h-10 w-10 items-center justify-center rounded-full border border-[#5BD6E8]/30">

                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#5BD6E8]" />

                  </div>

                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A5A7AE]">
                    Memory signal detected
                  </span>

                </div>


                <div className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#5BD6E8]">
                  AI discovered pattern
                </div>


                <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-6xl">

                  Implementation evidence appears
                  repeatedly in proposals that

                  <span className="text-[#5BD6E8]">
                    {" "}move forward.
                  </span>

                </h2>


                <p className="mt-9 max-w-2xl text-sm leading-7 text-[#A5A7AE]">

                  Bid-Memory found supporting evidence across
                  7 historical proposals and identified a
                  recurring relationship between implementation
                  clarity and successful outcomes.

                </p>

              </div>


              {/* STATS */}

              <div className="border-t border-[#30333A] pt-7 lg:border-l lg:border-t-0 lg:pl-8">

                <div className="text-6xl font-medium tracking-[-0.07em]">
                  94%
                </div>

                <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#7F828A]">
                  confidence
                </div>


                <div className="mt-10 text-4xl font-medium tracking-[-0.05em]">
                  7
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#7F828A]">
                  supporting bids
                </div>


                <Link
                  to="/memory"
                  className="editorial-link mt-12 text-xs text-white"
                >

                  Explore evidence

                  <ArrowUpRight className="h-3.5 w-3.5" />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

          <div>

            <div className="mb-6 flex items-center gap-3">

              <Brain className="h-4 w-4 text-[#315CFF]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
                The point of memory
              </span>

            </div>


            <h2 className="editorial-title max-w-4xl">

              Stop relearning
              <br />

              what you already know.

            </h2>

          </div>


          <Link
            to="/rfp/new"
            className="button-shine group relative flex w-fit items-center gap-3 bg-[#111318] px-6 py-4 text-sm font-medium text-white transition duration-500 hover:bg-[#315CFF]"
          >

            <span className="relative z-10 text-white">
              Start a bid
            </span>

            <ArrowUpRight className="relative z-10 h-4 w-4 text-white transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

          </Link>

        </div>

      </section>

    </div>
  );
}


function KPI({
  value,
  label,
  last = false,
}) {
  return (
    <div
      className={`px-6 py-9 md:px-10 ${
        last
          ? ""
          : "border-b border-[#D8D7D1] md:border-b-0 md:border-r"
      }`}
    >

      <div className="text-5xl font-medium tracking-[-0.06em]">
        {value}
      </div>

      <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#858680]">
        {label}
      </div>

    </div>
  );
}