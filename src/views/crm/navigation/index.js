import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import DashboardNavigation from '../views/dashboard/dashboard.nav'
import ClientsNavigation from '../views/clients/clients.nav'
import leadNav from '../views/Lead/lead.nav'

export default [
  {
      header: 'CRM',
  },
  {
    title: 'Test',
    icon: 'PieChartIcon',
    route: 'test-crm',
  },
  SalesMadeNavigation,
  DashboardNavigation,
  ClientsNavigation,
  ...leadNav,
]
