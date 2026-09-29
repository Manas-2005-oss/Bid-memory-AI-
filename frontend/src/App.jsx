import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Bids from "./pages/Bids";
import NewRFP from "./pages/NewRFP";
import RFPWorkspace from "./pages/RFPWorkspace";
import ProposalMemory from "./pages/ProposalMemory";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/rfp"
            element={<Bids />}
          />

          <Route
            path="/rfp/new"
            element={<NewRFP />}
          />

          <Route
            path="/rfp/:id"
            element={<RFPWorkspace />}
          />

          <Route
            path="/memory"
            element={<ProposalMemory />}
          />

          <Route
            path="/insights"
            element={<Insights />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}