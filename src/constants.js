import paths from "./paths.js";

export const constants = {
  productManagement: "product-management",
  ingredientOptions: "ingredient-options",
  firmProfile: "firm-profile",
};

const permissions = {
  user: 100,
};

export const sidebarItems = [
  {
    id: 1,
    name: "overview",
    path: paths.main,
    icon: "overview",
    "icon active": "overview active",
    permissions: [permissions.user],
  },
  {
    id: 2,
    name: "jobs",
    path: paths.jobs,
    icon: "jobs",
    "icon active": "jobs active",
    permissions: [permissions.user],
  },
  {
    id: 3,
    name: "candidates",
    path: paths.candidates,
    icon: "candidates",
    "icon active": "candidates active",
    permissions: [permissions.user],
  },
  {
    id: 4,
    name: "talent pools",
    path: paths.talent_pools,
    icon: "talent-pools",
    "icon active": "talent-pools active",
    permissions: [permissions.user],
  },
  {
    id: 5,
    name: "reports",
    path: paths.reports,
    icon: "reports",
    "icon active": "reports active",
    permissions: [permissions.user],
  },
  {
    id: 6,
    name: "campaigns",
    path: paths.campaigns,
    icon: "campaigns",
    "icon active": "campaigns active",
    permissions: [permissions.user],
  },
  {
    id: 7,
    name: "settings",
    path: paths.settings,
    icon: "settings",
    "icon active": "settings active",
    permissions: [permissions.user],
  },
];
