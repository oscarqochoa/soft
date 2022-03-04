import LeadsNav from '../views/leads/leads.nav'
import AnswersGuideNavigation from '@/views/social-network/views/answers-guide/answers-guide.navigation'
import BankOfFlyersNavigation from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.navigation'
import ClientNavigation from '@/views/social-network/views/clients/client.navigation'
import MigrationsNavigation from '@/views/social-network/views/migrations/migrations.navigation'
import ActivitiesNavigation from '@/views/social-network/views/activities/activities.navigation'
import DashboardNavigation2 from '@/views/social-network/views/dashboard2/dashboard.navigation'
import DashboardNavigation from '@/views/social-network/views/dashboard/dashboard.navigation'
import NcrNavigation from '@/views/social-network/views/ncr/ncr-social.nav'
import FileManagerNavigation from '@/views/social-network/views/file-manager/file-manager.nav'
import LoansNavigation from '@/views/social-network/views/loans/loans.nav'
import InventoryNavigation from '@/views/social-network/views/inventory/inventory.nav'
import ScheduleNavigation from '@/views/social-network/views/schedules/schedules.nav'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...DashboardNavigation,
  ...LeadsNav,
  ...ClientNavigation,
  ...NcrNavigation,
  ...MigrationsNavigation,
  ...AnswersGuideNavigation,
  ...BankOfFlyersNavigation,
  FileManagerNavigation,
  LoansNavigation,
  ...InventoryNavigation,
  ScheduleNavigation,
  ...ActivitiesNavigation,
  ...DashboardNavigation2,
]
export default navigation
