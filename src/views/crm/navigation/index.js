import calendarNav from '../views/calendar/calendar.nav'
import SalesMadeNavigation from '../views/sales-made/sales-made.nav'
import CommissionsNavigation from '../views/commissions/commissions.nav'
import DashboardNavigation from '../views/dashboard/dashboard.nav'
import PaymentsNavigation from '../views/payments/payments.nav'
import ClientsNavigation from '../views/clients/clients.nav'
import leadNav from '../views/Lead/lead.nav'
import ListsNavigation from '../views/lists/lists.nav'
import GlossaryNavigation from '../views/glossary/glossary.nav'
import LoansNavigation from '../views/loans/loans.nav'
import SchedulesNavigation from '../views/schedules/schedules.nav'
import FileManangerNavigation from '@/views/crm/views/file-mananger/file-mananger.nav'
import InventoryNavigation from '../views/inventory/inventory.nav'
import NcrNavigation from '../views/ncr/ncr.nav'

const navigation = [
  {
    header: 'C.R.M.',
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
  ...calendarNav,
  GlossaryNavigation,
  InventoryNavigation,
  SchedulesNavigation,
  NcrNavigation,
  FileManangerNavigation,
]
export default navigation
