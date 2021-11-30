import viewRoute from '../views/test/view.router'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import clientsRoute from '../views/clients/clients.router'
import viewDashboard from '../views/dashboard/dashboard.router'

export default [
  ...viewRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...viewDashboard,
]
