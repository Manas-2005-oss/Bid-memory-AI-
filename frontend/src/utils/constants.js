export const APP_NAME = "Bid-Memory";
export const APP_TAGLINE = "AI that remembers how your company wins.";

export const NAV_ITEMS = [
  {
    label: "Command Center",
    path: "/dashboard",
    icon: "command",
  },
  {
    label: "Bids",
    path: "/rfp",
    icon: "bids",
  },
  {
    label: "New Bid",
    path: "/rfp/new",
    icon: "new",
  },
  {
    label: "Company Memory",
    path: "/memory",
    icon: "memory",
  },
  {
    label: "Winning Patterns",
    path: "/memory/patterns",
    icon: "patterns",
  },
  {
    label: "Evidence Graph",
    path: "/evidence",
    icon: "evidence",
  },
  {
    label: "Insights",
    path: "/insights",
    icon: "insights",
  },
];

export const STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  DRAFT: "draft",
};

export const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === "true";