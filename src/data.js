import React from "react";
import { Enable, Disable, Block } from "./Status/Status";

export const customData = {
  type: {
    email: "Email",
    tag_manager: "Tag Manager",
    analytics: "Analytics",
    heatmap: "Heatmap",
    dmp_crm: "DMP / CRM",
  },
  status: {
    blocked: <Block />,
    enable: <Enable />,
    disable: <Disable />,
  },
};

export const tHead = {
  columns: [
    {
      columnName: "Tool Name",
      columnKey: "name",
      filter: { sort: true },
    },
    {
      columnName: "Used on",
      columnKey: "sites",
      filter: { sort: true },
    },
    {
      columnName: "Type",
      columnKey: "type",
      filter: { sort: true },
    },
    {
      columnName: "Status",
      columnKey: "status",
      filter: { sort: true },
    },
  ],
};

export const userData = [
  {
    id: 1,
    name: "ExpertSender",
    sites: 0,
    type: "email",
    status: "blocked",
  },
  {
    id: 2,
    name: "Tag Commander",
    sites: 0,
    type: "tag_manager",
    status: "blocked",
  },
  {
    id: 3,
    name: "Ysance",
    sites: 0,
    type: "dmp_crm",
    status: "blocked",
  },
  {
    id: 4,
    name: "AT Internet",
    sites: 1,
    type: "analytics",
    status: "enable",
  },
  {
    id: 5,
    name: "Content Square",
    sites: 3,
    type: "analytics",
    status: "enable",
  },
  {
    id: 6,
    name: "Google Tag Manager",
    sites: 2,
    type: "tag_manager",
    status: "enable",
  },
  {
    id: 7,
    name: "Heatmap",
    sites: 1,
    type: "heatmap",
    status: "enable",
  },
  {
    id: 8,
    name: "Tealium",
    sites: 0,
    type: "dmp_crm",
    status: "disable",
  },
  {
    id: 9,
    name: "Emarsys",
    sites: 0,
    type: "email",
    status: "disable",
  },
];
