import SalesMadeNavigation from '../views/sales-made/sales-made.nav'

export default [
  {
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
]
