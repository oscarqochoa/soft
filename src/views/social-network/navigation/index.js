import TestNavigation from '../views/test/test.navigation'
import BankOfFlyersNavigation from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.navigation'
import ClientNavigation from '@/views/social-network/views/clients/client.navigation'
import MigrationsNavigation from '@/views/social-network/views/migrations/migrations.navigation'
import ActivitiesNavigation from '@/views/social-network/views/activities/activities.navigation'
import DashboardNavigation from '@/views/social-network/views/dashboard/dashboard.navigation'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...TestNavigation,
  ...DashboardNavigation,
  ...ClientNavigation,
  ...MigrationsNavigation,
  ...BankOfFlyersNavigation,
  ...ActivitiesNavigation,

]
export default navigation
