export default [
  {
    path: "/crm/ncr",
    name: "ncr-crm",
    redirect: { name: "ncr-pending" },
    component: () => import("@/views/commons/components/ncr/NcrMain.vue"),
    meta: {
      isClientsTab: true,
      module: 2,
    },
    children: [
      {
        path: "pending",
        name: "ncr-pending",
        component: () =>
          import(
            "@/views/commons/components/ncr/components/ContentPending.vue"
          ),
        meta: {
          isClientsTab: true,
          module: 2,
          pageTitle: "NCR",
          breadcrumb: [
            {
              text: "Pending",
              active: true,
            },
          ],
        },
      },
      {
        path: "returned",
        name: "ncr-returned",
        component: () =>
          import(
            "@/views/commons/components/ncr/components/ContentReturned.vue"
          ),
        meta: {
          isClientsTab: true,
          module: 2,
          pageTitle: "NCR",
          breadcrumb: [
            {
              text: "Returned",
              active: true,
            },
          ],
        },
      },
      {
        path: "completed",
        name: "ncr-completed",
        component: () =>
          import(
            "@/views/commons/components/ncr/components/ContentCompleted.vue"
          ),

        meta: {
          isClientsTab: true,
          module: 2,
          pageTitle: "NCR",
          breadcrumb: [
            {
              text: "Completed",
              active: true,
            },
          ],
        },
      },
    ],
  },
  {
    path: "/crm/ncr/reportLead/:idfile/:idlead",
    name: "report-lead",
    component: () =>
      import("@/views/commons/components/ncr/components/ReportLead.vue"),
    props: true,
    meta: {
      isClientsTab: true,
      module: 2,
    },
  },
];
