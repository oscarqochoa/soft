import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import CommissionsNavigation from '../views/commissions/commissions.nav'
import DashboardNavigation from '../views/dashboard/dashboard.nav'
import ClientsNavigation from '../views/clients/clients.nav'
import leadNav from "../views/Lead/lead.nav"

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
  ...leadNav,

{
    title: 'Clients',
    icon: 'UsersIcon',
    route: 'crm-clients-list',
},
{
    title: 'Dashboard',
    icon: 'PieChartIcon',
    route: 'dashboard-crm',
    //   tag: '3',
    //   tagVariant: 'light-danger'
},
{
    title: 'Payments',
    icon: 'DollarSignIcon',
    route: 'payments-crm-list',
    //   tag: '3',
    //   tagVariant: 'light-danger'
},

]
    
]
