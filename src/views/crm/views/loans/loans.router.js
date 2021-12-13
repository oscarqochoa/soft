import LoansComponent from "@/views/commons/components/loans/LoansComponent.vue";
import LoansView from "@/views/commons/components/loans/LoansView.vue";
export default [
  {
    path: "/crm/loans",
    name: "loans-crm",
    redirect: "/crm/loans/my-loans",
    component: LoansComponent,
    children: [
      {
        path: "my-loans",
        name: "my-loans-crm",
        component: LoansView,
        meta: {
          tab: 1,
          module: 16,
          route: "crm",
        },
      },
      {
        path: "loans-module",
        name: "loans-module-crm",
        component: LoansView,
        meta: {
          tab: 2,
          module: 16,
          route: "crm",
        },
      },
    ],
    meta: {
      tab: 1,
      module: 16,
      route: "crm",
    },
  },
];
