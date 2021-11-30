import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import CommissionsNavigation from '../views/commissions/commissions.nav'

export default [{
    header: 'CRM',
  },
  {
    title: 'Test',
    icon: 'PieChartIcon',
    route: 'test-crm',
    //   tag: '3',
    //   tagVariant: 'light-danger'
  },
  SalesMadeNavigation,
  CommissionsNavigation,
  {
    title: 'Clients',
    icon: 'UsersIcon',
    route: 'crm-clients-list',
  },
]