import SalesMadeNavigation from "../views/sales-made/sales-made.nav";
import CommissionsNavigation from "../views/commissions/commissions.nav";
import LoansNavigation from "../views/loans/loans.nav";
import DashboardNavigation from "../views/dashboard/dashboard.nav";
import ClientsNavigation from "../views/clients/clients.nav";
import leadNav from "../views/Lead/lead.nav";

export default [
  {
    header: "CRM",
  },
  {
    title: "Test",
    icon: "PieChartIcon",
    route: "test-crm",
  },
  SalesMadeNavigation,
  CommissionsNavigation,
  LoansNavigation,
  DashboardNavigation,
  ClientsNavigation,
  ...leadNav,
];
