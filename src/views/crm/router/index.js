import viewRoute from '../views/test/view.router'
import leadRoute from '../views/Lead/lead.route'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import clientsRoute from '../views/clients/clients.router'
import commissionsRoute from '../views/commissions/commissions.router'
import viewDashboard from '../views/dashboard/dashboard.router'
import PaymentsRoute from '../views/payments/payments.router'
import ListsRoute from '../views/lists/lists.router'
export default [
  ...viewRoute,
  ...leadRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...commissionsRoute,
  ...viewDashboard,
  ...PaymentsRoute,
  ...ListsRoute
]



  
