import viewRoute from '../views/test/view.router'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import leadRoute from '../views/Lead/lead.route'
import clientsRoute from '../views/clients/clients.router'
import commissionsRoute from '../views/commissions/commissions.router'
import viewDashboard from '../views/dashboard/dashboard.router'
import PaymentsRoute from '../views/payments/payments.router'
export default [
  ...viewRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...commissionsRoute,
  ...viewDashboard,
  ...leadRoute,
  ...PaymentsRoute
]



  
