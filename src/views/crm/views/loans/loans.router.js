import LoansComponent from "@/commons/components/loans/LoansComponent.vue";
import LoansView from "@/commons/components/loans/LoansView.vue";
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
          module: 2,
          route: "crm",
        },
      },
      {
        path: "loans-module",
        name: "loans-module-crm",
        component: LoansView,
        meta: {
          tab: 2,
          module: 2,
          route: "crm",
        },
      },
    ],
    meta: {
      tab: 1,
      module: 2,
      route: "crm",
    },
  },
];
