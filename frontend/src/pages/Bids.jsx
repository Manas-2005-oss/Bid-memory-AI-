import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

import { useRFP } from "../hooks/useRFP";
import Loading from "../components/ui/Loading";
import ErrorState from "../components/ui/ErrorState";

/* =========================================================
   STATUS
========================================================= */

function StatusBadge({ status }) {
  const styles = {
    "In Progress":
      "border-[#C9D5FF] bg-[#F1F4FF] text-[#315CFF]",

    Draft:
      "border-[#D8D7D1] bg-[#F8F7F3] text-[#777871]",

    Analysis:
      "border-[#BFE8EF] bg-[#F0FBFC] text-[#16879A]",

    Completed:
      "border-[#C9E5D3] bg-[#F1F9F3] text-[#277A4D]",
  };

  return (
    <span
      className={`inline-flex w-fit items-center gap-2 border px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] ${
        styles[status] ||
        "border-[#D8D7D1] bg-[#F8F7F3] text-[#777871]"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status || "Unknown"}
    </span>
  );
}

/* =========================================================
   PROGRESS
========================================================= */

function ProgressBar({ progress = 0 }) {
  const value = Math.min(
    Math.max(Number(progress) || 0, 0),
    100
  );

  return (
    <div className="mt-4 max-w-[650px]">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.14em] text-[#999A95]">
          Proposal progress
        </span>

        <span className="text-[9px] text-[#777871]">
          {value}%
        </span>
      </div>

      <div className="h-[2px] w-full bg-[#DEDED8]">
        <div
          className="h-full bg-[#315CFF] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   BID ROW
========================================================= */

function BidRow({ bid }) {
  const deadline = bid.deadline
    ? new Date(bid.deadline)
    : null;

  const formattedDeadline =
    deadline && !Number.isNaN(deadline.getTime())
      ? deadline.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : bid.deadline || "Not specified";

  return (
    <article className="group border-t border-[#D8D7D1] py-6 transition-colors duration-300 hover:bg-white/40">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_150px_125px] lg:items-center">

        {/* =================================================
            BID
        ================================================= */}

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={bid.status} />

            {bid.memoryMatches !== undefined && (
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-[#92938E]">
                <Sparkles
                  size={12}
                  strokeWidth={1.7}
                  className="text-[#315CFF]"
                />

                {bid.memoryMatches} memory matches
              </span>
            )}
          </div>

          <Link
            to={`/rfp/${bid.id}`}
            className="mt-3 block w-fit"
          >
            <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.04em] text-[#111318] transition-colors duration-200 group-hover:text-[#315CFF] md:text-[29px]">
              {bid.title}
            </h2>
          </Link>

          {bid.client && (
            <p className="mt-1.5 text-xs text-[#777871]">
              {bid.client}
            </p>
          )}

          <ProgressBar progress={bid.progress} />
        </div>

        {/* =================================================
            DEADLINE
        ================================================= */}

        <div className="border-t border-[#E1E0DA] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-[#999A95]">
            <CalendarDays
              size={13}
              strokeWidth={1.6}
            />
            Deadline
          </div>

          <p className="mt-2 text-xs font-medium text-[#111318]">
            {formattedDeadline}
          </p>
        </div>

        {/* =================================================
            ACTION
        ================================================= */}

        <div className="flex lg:justify-end">
          <Link
            to={`/rfp/${bid.id}`}
            className="bid-open-button inline-flex items-center justify-center gap-2 whitespace-nowrap border border-[#111318] bg-[#111318] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.13em]"
          >
            <span className="bid-open-button-text">
              Open bid
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="bid-open-button-icon"
            />
          </Link>
        </div>

      </div>
    </article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Bids() {
  const { bids, loading, error } = useRFP();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredBids = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bids.filter((bid) => {
      const matchesSearch =
        !query ||
        bid.title?.toLowerCase().includes(query) ||
        bid.client?.toLowerCase().includes(query) ||
        bid.status?.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" ||
        bid.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [bids, search, filter]);

  /* =======================================================
     STATS
  ======================================================= */

  const totalBids = bids.length;

  const activeBids = bids.filter(
    (bid) =>
      bid.status === "In Progress" ||
      bid.status === "Analysis"
  ).length;

  const completedBids = bids.filter(
    (bid) => bid.status === "Completed"
  ).length;

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <div className="min-h-screen">

      {/* ===================================================
          COMPACT HERO
      ================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-9 pt-10 md:px-10 md:pb-10 md:pt-14">

        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_250px]">

          <div>

            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#777871]">
              <span className="h-px w-6 bg-[#315CFF]" />
              Proposal workspace
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.055em] text-[#111318] md:text-6xl">
              Your active{" "}
              <span className="text-[#315CFF]">
                bids.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#777871]">
              Every proposal in one place, with your
              company&apos;s previous work ready to inform
              the next response.
            </p>

          </div>

          {/* Intelligence */}

          <div className="border-l border-[#D8D7D1] pl-6">

            <p className="text-[9px] uppercase tracking-[0.18em] text-[#999A95]">
              Bid intelligence
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-[-0.05em]">
                {totalBids}
              </span>

              <span className="text-xs text-[#777871]">
                opportunities
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          STATS
      ================================================== */}

      <section className="border-y border-[#D8D7D1]">

        <div className="mx-auto grid max-w-[1500px] grid-cols-3">

          {/* Active */}

          <div className="border-r border-[#D8D7D1] px-6 py-5 md:px-10">

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#999A95]">
              <Clock3
                size={14}
                strokeWidth={1.6}
                className="text-[#315CFF]"
              />
              Active
            </div>

            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
              {activeBids}
            </p>

          </div>

          {/* Total */}

          <div className="border-r border-[#D8D7D1] px-6 py-5 md:px-10">

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#999A95]">
              <FileText
                size={14}
                strokeWidth={1.6}
                className="text-[#315CFF]"
              />
              Total
            </div>

            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
              {totalBids}
            </p>

          </div>

          {/* Completed */}

          <div className="px-6 py-5 md:px-10">

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#999A95]">
              <CheckCircle2
                size={14}
                strokeWidth={1.6}
                className="text-[#315CFF]"
              />
              Completed
            </div>

            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
              {completedBids}
            </p>

          </div>

        </div>
      </section>

      {/* ===================================================
          SEARCH + FILTER
      ================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 py-7 md:px-10">

        <div className="flex items-center gap-6">

          {/* Search */}

          <div className="relative min-w-0 flex-1">

            <Search
              size={16}
              strokeWidth={1.6}
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#999A95]"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search bids, clients or status..."
              className="w-full border-b border-[#C8C7C1] bg-transparent py-3 pl-7 pr-3 text-sm text-[#111318] outline-none placeholder:text-[#999A95] focus:border-[#315CFF]"
            />

          </div>

          {/* Filters */}

          <div className="hidden shrink-0 lg:block">

            <div className="flex items-center gap-1.5">

              {[
                "All",
                "In Progress",
                "Analysis",
                "Draft",
                "Completed",
              ].map((item) => {

                const active =
                  filter === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setFilter(item)
                    }
                    className={`whitespace-nowrap border px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      active
                        ? "border-[#111318] bg-[#111318] text-white"
                        : "border-[#D8D7D1] bg-transparent text-[#777871] hover:border-[#111318] hover:text-[#111318]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

            </div>

          </div>

        </div>

        {/* Mobile filters */}

        <div className="mt-4 overflow-x-auto lg:hidden">

          <div className="flex w-max gap-1.5">

            {[
              "All",
              "In Progress",
              "Analysis",
              "Draft",
              "Completed",
            ].map((item) => {

              const active =
                filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setFilter(item)
                  }
                  className={`whitespace-nowrap border px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.1em] ${
                    active
                      ? "border-[#111318] bg-[#111318] text-white"
                      : "border-[#D8D7D1] text-[#777871]"
                  }`}
                >
                  {item}
                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================
          BID LIST
      ================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-16 md:px-10">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#111318] pb-3">

          <p className="text-[9px] uppercase tracking-[0.18em] text-[#777871]">
            {filteredBids.length}{" "}
            {filteredBids.length === 1
              ? "bid"
              : "bids"}
          </p>

          <p className="text-[9px] uppercase tracking-[0.16em] text-[#999A95]">
            Company proposal memory enabled
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <Loading label="Loading your bids..." />
        )}

        {/* Error */}

        {!loading && error && (
          <div className="py-8">
            <ErrorState message={error} />
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          filteredBids.length === 0 && (

            <div className="py-16 text-center">

              <Search
                size={20}
                className="mx-auto text-[#999A95]"
              />

              <h2 className="mt-4 text-xl font-semibold">
                No bids found.
              </h2>

              <p className="mt-2 text-sm text-[#777871]">
                Try another search or filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#315CFF]"
              >
                Clear filters →
              </button>

            </div>
          )}

        {/* Results */}

        {!loading &&
          !error &&
          filteredBids.length > 0 && (

            <div>
              {filteredBids.map((bid) => (
                <BidRow
                  key={bid.id}
                  bid={bid}
                />
              ))}
            </div>
          )}

      </section>

      {/* ===================================================
          CTA
      ================================================== */}

      <section className="border-t border-[#D8D7D1] bg-[#111318] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-14 md:px-10 md:py-18">

          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[9px] uppercase tracking-[0.18em] text-[#8E919A]">
                Start something new
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-5xl">
                Turn the next RFP into{" "}
                <span className="text-[#5BD6E8]">
                  institutional memory.
                </span>
              </h2>

            </div>

            <Link
              to="/rfp/new"
              className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#315CFF] bg-[#315CFF] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Plus
                size={14}
                strokeWidth={1.7}
              />

              Start a new bid
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}