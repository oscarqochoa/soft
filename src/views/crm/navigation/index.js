import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import CommissionsNavigation from '../views/commissions/commissions.nav'
import DashboardNavigation from '../views/dashboard/dashboard.nav'
import ClientsNavigation from '../views/clients/clients.nav'

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
  CommissionsNavigation,
  DashboardNavigation,
  ClientsNavigation,

]