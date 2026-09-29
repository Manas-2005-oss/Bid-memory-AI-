import {
  ArrowUpRight,
  Brain,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D8D7D1] bg-[#F4F3EE]">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#315CFF]/[0.025] blur-3xl" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#5BD6E8]/[0.025] blur-3xl" />

      </div>


      {/* Main */}

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">

        {/* Top section */}

        <div className="grid gap-16 border-b border-[#D8D7D1] py-20 md:py-24 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">

          {/* Brand */}

          <div>

            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-3"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111318] transition duration-500 group-hover:rotate-[-8deg] group-hover:bg-[#315CFF]">

                <Brain className="h-5 w-5 text-white" />

              </div>


              <div>

                <div className="text-lg font-bold tracking-[-0.035em]">

                  Bid<span className="text-[#315CFF]">-</span>Memory

                </div>

                <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-[#858680]">

                  Proposal Intelligence

                </div>

              </div>

            </Link>


            <p className="mt-8 max-w-md text-sm leading-7 text-[#777871]">

              AI that remembers how your company wins.
              Turn previous proposals, evidence, and outcomes
              into organizational memory for the next bid.

            </p>


            <div className="mt-8 flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inset-0 animate-ping rounded-full bg-[#315CFF]/30" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#315CFF]" />

              </span>

              <span className="text-[10px] uppercase tracking-[0.16em] text-[#858680]">

                Memory system active

              </span>

            </div>

          </div>


          {/* Navigation */}

          <div>

            <div className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#969792]">

              Explore

            </div>


            <div className="flex flex-col gap-4">

              <FooterLink
                to="/dashboard"
                label="Dashboard"
              />

              <FooterLink
                to="/rfp"
                label="Bids"
              />

              <FooterLink
                to="/memory"
                label="Company Memory"
              />

              <FooterLink
                to="/insights"
                label="Insights"
              />

            </div>

          </div>


          {/* Workspace */}

          <div>

            <div className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#969792]">

              Workspace

            </div>


            <p className="max-w-xs text-sm leading-6 text-[#777871]">

              Ready to stop starting every proposal
              from zero?

            </p>


            <Link
              to="/rfp/new"
              className="button-shine group relative mt-7 flex w-fit items-center gap-3 bg-[#111318] px-5 py-3.5 text-xs font-medium text-white transition duration-500 hover:bg-[#315CFF]"
            >

              <span className="relative z-10 text-white">
                Start a bid
              </span>

              <ArrowUpRight className="relative z-10 h-4 w-4 text-white transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

            </Link>

          </div>

        </div>


        {/* Team WIPETH */}

        <div className="relative overflow-hidden py-16 md:py-20">

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <div>

              <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#315CFF]">

                Built by

              </div>


              <h2 className="text-5xl font-medium tracking-[-0.07em] md:text-7xl">

                Team WIPETH

              </h2>


              <p className="mt-5 max-w-lg text-sm leading-6 text-[#777871]">

                Building intelligent systems that turn
                organizational knowledge into action.

              </p>

            </div>


            {/* Team mark */}

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D8D7D1] transition duration-500 hover:border-[#315CFF] hover:bg-[#315CFF] hover:text-white">

                <span className="text-sm font-bold tracking-[-0.04em]">
                  W
                </span>

              </div>


              <div>

                <div className="text-xs font-semibold tracking-[-0.01em]">
                  WIPETH
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#969792]">
                  Team
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="flex flex-col gap-4 border-t border-[#D8D7D1] py-6 md:flex-row md:items-center md:justify-between">

          <div className="text-[10px] uppercase tracking-[0.15em] text-[#969792]">

            © {new Date().getFullYear()} Bid-Memory

          </div>


          <div className="flex items-center gap-6">

            <span className="text-[10px] uppercase tracking-[0.15em] text-[#969792]">

              Team WIPETH

            </span>


            <span className="h-1 w-1 rounded-full bg-[#315CFF]" />


            <span className="text-[10px] uppercase tracking-[0.15em] text-[#969792]">

              AI Proposal Intelligence

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER LINK
   ========================================================= */

function FooterLink({
  to,
  label,
}) {
  return (
    <Link
      to={to}
      className="group flex w-fit items-center gap-2 text-sm text-[#555752] transition duration-300 hover:text-[#315CFF]"
    >

      <span>
        {label}
      </span>

      <ArrowUpRight
        className="h-3 w-3 opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />

    </Link>
  );
}