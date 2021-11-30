import viewRoute from '../views/test/view.router'
import leadRoute from '../views/Lead/lead.route'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import clientsRoute from '../views/clients/clients.router'
import viewDashboard from '../views/dashboard/dashboard.router'

export default [
  ...viewRoute,
  ...leadRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...viewDashboard,
]
