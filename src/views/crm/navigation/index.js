
import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import CommissionsNavigation from '../views/commissions/commissions.nav'
import DashboardNavigation from '../views/dashboard/dashboard.nav'
import PaymentsNavigation from '../views/payments/payments.nav'
import ClientsNavigation from '../views/clients/clients.nav'
import leadNav from '../views/Lead/lead.nav'
import ListsNavigation from '../views/lists/lists.nav'
import GlossaryNavigation from '../views/glossary/glossary.nav'
import LoansNavigation from '../views/loans/loans.nav'
import FileManangerNavigation from '@/views/crm/views/file-mananger/file-mananger.nav'
import InventoryNavigation from '../views/inventory/inventory.nav'
import NcrNavigation from '../views/ncr/ncr.nav'

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
  LoansNavigation,
  DashboardNavigation,
  PaymentsNavigation,
  ListsNavigation,
  ClientsNavigation,
  ...leadNav,
  GlossaryNavigation,
  InventoryNavigation,
  NcrNavigation,
  FileManangerNavigation,
]
    
