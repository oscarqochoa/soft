import viewRoute from '../views/test/view.router'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import clientsRoute from '../views/clients/clients.router'
import commissionsRoute from '../views/commissions/commissions.router'

export default [
  ...viewRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...commissionsRoute,
]