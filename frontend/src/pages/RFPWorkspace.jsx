import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Check,
  CircleAlert,
  FileText,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { Link, useLocation, useParams } from "react-router-dom";

export default function RFPWorkspace() {
  const { id } = useParams();
  const location = useLocation();

  /*
   * =========================================================
   * GET RFP RESULT
   * =========================================================
   *
   * NewRFP sends:
   *
   * navigate("/rfp/workspace", {
   *   state: {
   *     rfpResult: result,
   *   },
   * });
   *
   * We also support the older `result` key and
   * sessionStorage as a fallback.
   */

  let result =
    location.state?.rfpResult ||
    location.state?.result ||
    null;

  if (!result) {
    try {
      const stored = sessionStorage.getItem("rfpResult");

      if (stored) {
        result = JSON.parse(stored);
      }
    } catch (error) {
      console.error(
        "Failed to read stored RFP result:",
        error
      );
    }
  }

  /*
   * Safety fallback
   */
  result = result || {};

  /*
   * Debugging
   *
   * After upload you should see the complete backend
   * response here.
   */
  console.log("RFP WORKSPACE RESULT:", result);

  /*
   * =========================================================
   * HANDLE POSSIBLE API RESPONSE WRAPPERS
   * =========================================================
   *
   * Some API helpers return:
   *
   * {
   *   analysis: {...},
   *   bid_memory: {...},
   *   proposal: {...}
   * }
   *
   * Others may return:
   *
   * {
   *   data: {
   *     analysis: {...},
   *     ...
   *   }
   * }
   *
   * Support both without breaking the current backend.
   */

  const payload =
    result?.data &&
    typeof result.data === "object" &&
    !Array.isArray(result.data)
      ? result.data
      : result;

  /*
   * =========================================================
   * MAIN BACKEND SECTIONS
   * =========================================================
   */

  const analysis = payload?.analysis || {};

  const bidMemory =
    payload?.bid_memory ||
    payload?.bidMemory ||
    {};

  const proposal =
    payload?.proposal ||
    {};

  /*
   * =========================================================
   * ARRAY NORMALIZER
   * =========================================================
   */

  const getArray = (value) => {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string" && value.trim()) {
      return [value];
    }

    if (
      value &&
      typeof value === "object"
    ) {
      return Object.values(value).flatMap((item) =>
        Array.isArray(item)
          ? item
          : typeof item === "string"
          ? [item]
          : []
      );
    }

    return [];
  };

  /*
   * =========================================================
   * REQUIREMENTS
   * =========================================================
   */

  const requirementData =
    getArray(
      proposal.understanding_of_requirements
    ).length > 0
      ? getArray(
          proposal.understanding_of_requirements
        )
      : getArray(analysis.requirements);

  /*
   * =========================================================
   * PROPOSAL CONTENT
   * =========================================================
   */

  const proposedSolution = getArray(
    proposal.proposed_solution
  );

  const technicalApproach = getArray(
    proposal.technical_approach
  );

  const implementationApproach = getArray(
    proposal.implementation_approach
  );

  const securityCompliance = getArray(
    proposal.security_compliance
  );

  const riskConsiderations = getArray(
    proposal.risk_considerations
  );

  const supportMaintenance = getArray(
    proposal.support_maintenance
  );

  const historicalLessons = getArray(
    proposal.historical_lessons
  );

  const recommendations = getArray(
    proposal.recommendations
  );

  /*
   * Combine proposal sections for the main response.
   */
  const responseParagraphs = [
    ...proposedSolution,
    ...technicalApproach,
    ...implementationApproach,
  ];

  /*
   * =========================================================
   * BID MEMORY / HISTORICAL SOURCES
   * =========================================================
   */

  let sources = [];

  if (Array.isArray(bidMemory)) {
    sources = bidMemory;
  } else if (Array.isArray(bidMemory.sources)) {
    sources = bidMemory.sources;
  } else if (Array.isArray(bidMemory.matches)) {
    sources = bidMemory.matches;
  } else if (
    Array.isArray(bidMemory.relevant_bids)
  ) {
    sources = bidMemory.relevant_bids;
  } else if (
    Array.isArray(bidMemory.historical_bids)
  ) {
    sources = bidMemory.historical_bids;
  }

  /*
   * =========================================================
   * MEMORY CONFIDENCE
   * =========================================================
   */

  const confidence =
    bidMemory.confidence ??
    bidMemory.memory_confidence ??
    bidMemory.score ??
    null;

  const confidenceText =
    typeof confidence === "number"
      ? `${Math.round(
          confidence <= 1
            ? confidence * 100
            : confidence
        )}%`
      : "—";

  /*
   * =========================================================
   * TITLE / CLIENT
   * =========================================================
   */

  const title =
    analysis.title ||
    analysis.project_title ||
    analysis.rfp_title ||
    analysis.name ||
    payload.title ||
    payload.rfp_title ||
    "RFP Analysis";

  const client =
    analysis.client ||
    analysis.client_name ||
    analysis.organization ||
    analysis.customer ||
    payload.client ||
    payload.client_name ||
    "Client information unavailable";

  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  const hasResult =
    Object.keys(payload).length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[12%] top-[18%] h-80 w-80 rounded-full bg-[#315CFF]/[0.03] blur-3xl" />

        <div className="absolute right-[7%] top-[45%] h-96 w-96 rounded-full bg-[#5BD6E8]/[0.03] blur-3xl" />

      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-16 md:px-10 md:pt-24">

        <div className="flex flex-col gap-8">

          {/* TOP BAR */}

          <div className="flex flex-wrap items-center justify-between gap-5">

            <Link
              to="/rfp"
              className="editorial-link text-xs text-[#777871] transition hover:text-[#315CFF]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to bids
            </Link>

            <div className="flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inset-0 animate-ping rounded-full bg-[#315CFF]/30" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#315CFF]" />

              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-[#777871]">
                AI memory active
              </span>

            </div>

          </div>

          {/* TITLE */}

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="reveal">

              <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#315CFF]">
                Bid workspace / {id || "new"}
              </div>

              <h1 className="editorial-title">
                {title}
              </h1>

            </div>

            <div className="reveal reveal-delay-1 text-left lg:text-right">

              <div className="text-[10px] uppercase tracking-[0.18em] text-[#969792]">
                Client
              </div>

              <div className="mt-2 text-sm">
                {client}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NO RESULT WARNING
      ===================================================== */}

      {!hasResult && (
        <section className="relative mx-auto max-w-[1600px] px-6 pb-8 md:px-10">

          <div className="flex items-start gap-4 border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">

            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />

            <div>
              No RFP analysis result was found.
              Please return to the RFP intake page and
              upload the document again.
            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          WORKSPACE
      ===================================================== */}

      <section className="relative border-y border-[#D8D7D1] bg-white/35">

        <div className="mx-auto max-w-[1600px]">

          <div className="grid lg:grid-cols-[280px_1fr_310px]">

            {/* =================================================
                REQUIREMENTS
            ================================================= */}

            <aside className="border-b border-[#D8D7D1] lg:border-b-0 lg:border-r">

              <div className="lg:sticky lg:top-[82px]">

                <div className="border-b border-[#D8D7D1] px-6 py-6">

                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#969792]">
                    Requirements
                  </div>

                  <div className="mt-3 text-sm">
                    {requirementData.length} requirements
                  </div>

                </div>

                <div>

                  {requirementData.length > 0 ? (

                    requirementData.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="group border-b border-[#D8D7D1] px-6 py-6 transition duration-300 hover:bg-white/60"
                        >

                          <div className="mb-3 flex items-center justify-between">

                            <span className="text-[9px] text-[#A0A19C]">
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <StatusIcon status="covered" />

                          </div>

                          <div className="text-sm leading-5 transition duration-300 group-hover:translate-x-1">
                            {renderValue(item)}
                          </div>

                          <div className="mt-3 text-[9px] uppercase tracking-[0.15em] text-[#969792]">
                            covered
                          </div>

                        </div>

                      )
                    )

                  ) : (

                    <div className="px-6 py-8 text-xs leading-6 text-[#777871]">
                      No structured requirements were
                      returned by the RFP analysis.
                    </div>

                  )}

                </div>

              </div>

            </aside>

            {/* =================================================
                AI RESPONSE
            ================================================= */}

            <main className="min-h-[750px] border-b border-[#D8D7D1] lg:border-b-0 lg:border-r">

              <div className="px-6 py-8 md:px-10 md:py-10">

                {/* AI HEADER */}

                <div className="mb-10 flex items-center justify-between gap-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111318]">

                      <Sparkles className="h-3.5 w-3.5 text-white" />

                    </div>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777871]">
                      AI response
                    </span>

                  </div>

                  <div className="hidden text-[10px] text-[#969792] sm:block">
                    Generated from RFP + memory
                  </div>

                </div>

                {/* RESPONSE */}

                <div className="ai-scan relative border border-[#D8D7D1] bg-white/60 p-7 md:p-10">

                  <div className="mb-9 flex items-center gap-3">

                    <span className="relative flex h-2.5 w-2.5">

                      <span className="absolute inset-0 animate-ping rounded-full bg-[#315CFF]/30" />

                      <span className="relative h-2.5 w-2.5 rounded-full bg-[#315CFF]" />

                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#315CFF]">
                      Memory-informed proposal
                    </span>

                  </div>

                  {/* EXECUTIVE SUMMARY */}

                  <h2 className="text-3xl font-medium leading-[1.02] tracking-[-0.05em] md:text-5xl">

                    {renderValue(
                      proposal.executive_summary
                    ) ||
                      "Proposal generated from the uploaded RFP."}

                  </h2>

                  <div className="my-10 h-px bg-[#D8D7D1]" />

                  {/* PROPOSAL CONTENT */}

                  <div className="space-y-7 text-sm leading-7 text-[#62645F]">

                    {responseParagraphs.length > 0 ? (

                      responseParagraphs.map(
                        (item, index) => (

                          <p key={index}>
                            {renderValue(item)}
                          </p>

                        )
                      )

                    ) : (

                      <p>
                        Additional proposal information
                        is required.
                      </p>

                    )}

                  </div>

                  {/* SECURITY */}

                  {securityCompliance.length > 0 && (

                    <ProposalSection
                      title="Security & compliance"
                      items={securityCompliance}
                    />

                  )}

                  {/* SUPPORT */}

                  {supportMaintenance.length > 0 && (

                    <ProposalSection
                      title="Support & maintenance"
                      items={supportMaintenance}
                    />

                  )}

                  {/* RISKS */}

                  {riskConsiderations.length > 0 && (

                    <ProposalSection
                      title="Risk considerations"
                      items={riskConsiderations}
                    />

                  )}

                  {/* RECOMMENDATIONS */}

                  {recommendations.length > 0 && (

                    <ProposalSection
                      title="Recommendations"
                      items={recommendations}
                    />

                  )}

                  {/* MEMORY USED */}

                  <div className="mt-12 border border-[#D8D7D1] bg-[#F4F3EE] p-6">

                    <div className="mb-5 flex items-center gap-3">

                      <Brain className="h-4 w-4 text-[#315CFF]" />

                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#315CFF]">
                        Memory used
                      </span>

                    </div>

                    <p className="text-sm leading-6">

                      Historical bid memory was retrieved
                      and used to inform this proposal.

                      {confidence !== null && (
                        <>
                          {" "}
                          Current memory confidence:

                          <strong className="font-medium text-[#111318]">
                            {" "}
                            {confidenceText}
                          </strong>
                        </>
                      )}

                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="mt-7 flex flex-wrap gap-3">

                  <button
                    onClick={() => {
                      sessionStorage.setItem(
                        "acceptedProposal",
                        JSON.stringify(proposal)
                      );
                    }}
                    className="button-shine group relative flex items-center gap-3 bg-[#111318] px-6 py-4 text-xs font-medium text-white transition duration-500 hover:bg-[#315CFF]"
                  >

                    <span className="relative z-10 text-white">
                      Accept response
                    </span>

                    <Check className="relative z-10 h-4 w-4 text-white" />

                  </button>

                  <button
                    onClick={() =>
                      window.location.reload()
                    }
                    className="flex items-center gap-3 border border-[#D8D7D1] px-6 py-4 text-xs transition duration-300 hover:border-[#111318] hover:bg-white/60"
                  >

                    Regenerate

                    <RefreshCw className="h-3.5 w-3.5" />

                  </button>

                </div>

              </div>

            </main>

            {/* =================================================
                EVIDENCE PANEL
            ================================================= */}

            <aside>

              <div className="lg:sticky lg:top-[82px]">

                <div className="border-b border-[#D8D7D1] px-6 py-6">

                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#969792]">
                    Evidence
                  </div>

                  <div className="mt-3 text-sm">
                    Why this answer?
                  </div>

                </div>

                <div className="px-6 py-8">

                  {/* MEMORY NODE */}

                  <div className="memory-pulse relative mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#111318]">

                    <Brain className="relative h-6 w-6 text-white" />

                  </div>

                  <div className="text-5xl font-medium tracking-[-0.07em]">
                    {confidenceText}
                  </div>

                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#969792]">
                    memory confidence
                  </div>

                  <div className="my-8 h-px bg-[#D8D7D1]" />

                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#969792]">
                    Supporting sources
                  </div>

                  <div className="mt-5">

                    {sources.length > 0 ? (

                      sources.map(
                        (source, index) => {

                          const sourceTitle =
                            typeof source === "string"
                              ? source
                              : source?.title ||
                                source?.name ||
                                source?.project_name ||
                                source?.rfp_title ||
                                "Historical bid";

                          return (
                            <Source
                              key={index}
                              number={String(
                                index + 1
                              ).padStart(2, "0")}
                              title={sourceTitle}
                            />
                          );
                        }
                      )

                    ) : (

                      <div className="py-4 text-xs leading-6 text-[#777871]">
                        No historical source details
                        were returned.
                      </div>

                    )}

                  </div>

                  <Link
                    to="/memory"
                    className="editorial-link mt-8 text-xs text-[#777871] transition hover:text-[#315CFF]"
                  >

                    Explore company memory

                    <ArrowUpRight className="h-3.5 w-3.5" />

                  </Link>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          LOWER AI SECTION
      ===================================================== */}

      <section className="relative bg-[#111318] text-white">

        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">

          <div className="grid gap-12 md:grid-cols-[1fr_300px]">

            <div>

              <div className="mb-7 flex items-center gap-3">

                <FileText className="h-4 w-4 text-[#5BD6E8]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#5BD6E8]">
                  Proposal intelligence
                </span>

              </div>

              <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.065em] md:text-7xl">

                The response
                <br />

                gets smarter when
                <br />

                the memory gets richer.

              </h2>

            </div>

            <div className="border-t border-[#30333A] pt-6 md:border-l md:border-t-0 md:pl-8">

              <p className="text-sm leading-7 text-[#A5A7AE]">

                {historicalLessons.length > 0
                  ? renderValue(
                      historicalLessons[0]
                    )
                  : "Every accepted response can become new organizational memory — making the next proposal more informed than the last."}

              </p>

              <Link
                to="/memory"
                className="editorial-link mt-8 text-xs text-white"
              >

                Explore memory

                <ArrowUpRight className="h-3.5 w-3.5" />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   SAFE VALUE RENDERER
   ========================================================= */

function renderValue(value) {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => renderValue(item))
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "object") {
    return (
      value.text ||
      value.description ||
      value.title ||
      value.name ||
      JSON.stringify(value)
    );
  }

  return String(value);
}


/* =========================================================
   PROPOSAL SECTION
   ========================================================= */

function ProposalSection({
  title,
  items,
}) {
  return (
    <div className="mt-10 border-t border-[#D8D7D1] pt-8">

      <div className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#315CFF]">
        {title}
      </div>

      <div className="space-y-4">

        {items.map((item, index) => (

          <div
            key={index}
            className="flex gap-3 text-sm leading-6 text-[#62645F]"
          >

            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#315CFF]" />

            <span>
              {renderValue(item)}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}


/* =========================================================
   REQUIREMENT STATUS
   ========================================================= */

function StatusIcon({ status }) {

  if (status === "covered") {

    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111318] text-white">

        <Check className="h-3 w-3" />

      </span>
    );
  }

  if (status === "partial") {

    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#315CFF] text-[#315CFF]">

        <span className="h-1.5 w-1.5 rounded-full bg-[#315CFF]" />

      </span>
    );
  }

  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D8D7D1]">

      <CircleAlert className="h-3 w-3 text-[#969792]" />

    </span>
  );
}


/* =========================================================
   SOURCE
   ========================================================= */

function Source({
  number,
  title,
}) {

  return (
    <div className="group flex items-center gap-4 border-b border-[#D8D7D1] py-4">

      <span className="text-[9px] text-[#A0A19C]">
        {number}
      </span>

      <span className="flex-1 text-xs leading-5 transition duration-300 group-hover:text-[#315CFF]">
        {renderValue(title)}
      </span>

      <ArrowUpRight className="h-3.5 w-3.5 text-[#A0A19C] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#315CFF]" />

    </div>
  );
}