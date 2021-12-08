export default [
  {
    path: "/crm/commissions-crm",
    name: "commissions-crm",
    component: () =>
      import("@/commons/components/commissions/CommissionsModules.vue"),
    meta: {
      pageTitle: "Commissions",
      breadcrumb: [
        {
          text: "Commissions",
        },
      ],
      module: 16,
      tab: "crm",
    },
  },
];
