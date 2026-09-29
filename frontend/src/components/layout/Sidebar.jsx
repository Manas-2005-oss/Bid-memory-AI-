import {
  ArrowUpRight,
  Brain,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { useState } from "react";

const navigation = [
  {
    name: "Bids",
    path: "/rfp",
  },
  {
    name: "Memory",
    path: "/memory",
  },
  {
    name: "Insights",
    path: "/insights",
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D7D1] bg-[#F4F3EE]/95 backdrop-blur-xl">

      <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 md:px-10">

        {/* LOGO */}

        <Link
          to="/dashboard"
          className="group flex items-center gap-3"
        >

          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#111318] transition duration-500 group-hover:rotate-[-8deg] group-hover:bg-[#315CFF]">

            <Brain className="relative z-10 h-5 w-5 text-white" />

          </div>

          <div>

            <div className="text-[17px] font-bold tracking-[-0.03em]">
              Bid<span className="text-[#315CFF]">-</span>Memory
            </div>

            <div className="text-[9px] uppercase tracking-[0.2em] text-[#858680]">
              Proposal Intelligence
            </div>

          </div>

        </Link>


        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-9 md:flex">

          {navigation.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative text-[13px] transition duration-300 ${
                  isActive
                    ? "font-medium text-[#111318]"
                    : "text-[#777871] hover:text-[#111318]"
                }`
              }
            >

              {({ isActive }) => (
                <>
                  <span className="relative z-10">
                    {item.name}
                  </span>

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#315CFF] transition-all duration-500 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />

                </>
              )}

            </NavLink>

          ))}

        </nav>


        {/* START BID */}

        <Link
          to="/rfp/new"
          className="button-shine group hidden items-center gap-3 bg-[#111318] px-5 py-3 text-xs font-semibold text-white transition duration-500 hover:bg-[#315CFF] md:flex"
        >

          <span className="relative z-10 text-white">
            Start a bid
          </span>

          <ArrowUpRight className="relative z-10 h-4 w-4 text-white transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

        </Link>


        {/* MOBILE */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
        >

          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}

        </button>

      </div>


      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="border-t border-[#D8D7D1] bg-[#F4F3EE] px-6 py-7 md:hidden">

          <div className="flex flex-col gap-6">

            {navigation.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-xl tracking-[-0.03em]"
              >
                {item.name}
              </NavLink>

            ))}


            <Link
              to="/rfp/new"
              onClick={() => setMobileOpen(false)}
              className="button-shine flex w-fit items-center gap-3 bg-[#111318] px-5 py-3 text-sm text-white"
            >

              <span className="relative z-10 text-white">
                Start a bid
              </span>

              <ArrowUpRight className="relative z-10 h-4 w-4 text-white" />

            </Link>

          </div>

        </div>

      )}

    </header>
  );
}