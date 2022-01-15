import LeadList from "./lead-module/list/LeadsList.vue";
import LeadSnList from "./lead-module/list/LeadsSnList.vue";
import LeadWPotentialList from "./lead-module/list/LeadsWPotentialList.vue";

export default [
  {
    path: "/crm/leads",
    name: "lead-crm",
    component: () => import("./Lead.vue"),
    redirect: { name: "lead-crm-lead-list" },
    children: [
      {
        path: "",
        redirect: { name: "lead-crm-lead-list" },
        meta: {
          route: "crm",
        },
      },
      {
        path: "",
        component: LeadList,
        name: "lead-crm-lead-list",
        meta: {
          route: "crm",
        },
      },
      {
        path: "sn",
        component: LeadSnList,
        name: "lead-crm-lead-sn-list",
        meta: {
          route: "crm",
        },
      },
      {
        path: "w-potential",
        component: LeadWPotentialList,
        name: "lead-crm-lead-w-potential-list",
        meta: {
          route: "crm",
        },
      },
    ],
    meta: {
      pageTitle: "Leads",
      breadcrumb: [
        {
          text: "Leads",
        },
      ],
    },
  },
  {
    path: "/crm/leads/:id",
    name: "lead-show",
    component: () => import("./lead-module/dashboard/default.vue"),
    meta: {
      route: "crm",
    },
  },
];
