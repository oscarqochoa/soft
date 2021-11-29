import viewRoute from '../views/test/view.router'
import viewDashboard from '../views/dashboard/dashboard.router'
import clientsRoute from '../views/clients/clients.router'

export default [
    ...viewRoute,
    ...viewDashboard,
    ...clientsRoute
]
  