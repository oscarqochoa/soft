import calendarRoute from "../views/calendar/calendar.router";
import viewRoute from "../views/test/view.router";
import leadRoute from "../views/Lead/lead.route";
import SalesMadeRoute from "../views/sales-made/sales-made.router";
import clientsRoute from "../views/clients/clients.router";
import commissionsRoute from "../views/commissions/commissions.router";
import viewDashboard from "../views/dashboard/dashboard.router";
import PaymentsRoute from "../views/payments/payments.router";
import ListsRoute from "../views/lists/lists.router";
import GlossaryRoute from "../views/glossary/glossary.router";
import LoansRoute from "../views/loans/loans.router";
import SchedulesRoute from "../views/schedules/schedules.router";
import FileManangerRoute from "@/views/crm/views/file-mananger/file-mananger.router.js";
import InventoryRouter from "../views/inventory/inventory.router";
import NcrRouter from "../views/ncr/ncr.router";
const routes = [
  ...calendarRoute,
  ...viewRoute,
  ...leadRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...commissionsRoute,
  ...LoansRoute,
  ...SchedulesRoute,
  ...viewDashboard,
  ...PaymentsRoute,
  ...ListsRoute,
  ...GlossaryRoute,
  ...InventoryRouter,
  ...NcrRouter,
  FileManangerRoute,
];

routes.map((route) => {
  if (route.meta) {
    route.meta.module = 2;
  } else {
    route.meta = { module: 2 };
  }
});

export default routes;
