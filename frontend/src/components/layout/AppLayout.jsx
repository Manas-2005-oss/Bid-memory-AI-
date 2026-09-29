import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AmbientBackground from "./AmbientBackground";

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F3EE] text-[#111318]">

      {/* GLOBAL BACKGROUND */}

      <AmbientBackground />

      {/* APPLICATION */}

      <div className="relative z-10">

        {/* NAVIGATION */}

        <Sidebar />


        {/* PAGE */}

        <main
          key={location.pathname}
          className="page-enter"
        >
          <Outlet />
        </main>


        {/* FOOTER */}

        <Footer />

      </div>

    </div>
  );
}