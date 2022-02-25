import TestNavigation from '../views/test/test.navigation'
import AnswersGuideNavigation from '@/views/social-network/views/answers-guide/answers-guide.navigation'
import BankOfFlyersNavigation from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.navigation'
import ClientNavigation from '@/views/social-network/views/clients/client.navigation'
import MigrationsNavigation from '@/views/social-network/views/migrations/migrations.navigation'
import ActivitiesNavigation from '@/views/social-network/views/activities/activities.navigation'
import DashboardNavigation2 from '@/views/social-network/views/dashboard2/dashboard.navigation'
import DashboardNavigation from '@/views/social-network/views/dashboard/dashboard.navigation'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...TestNavigation,
  ...DashboardNavigation,
  ...ClientNavigation,
  ...MigrationsNavigation,
  ...AnswersGuideNavigation,
  ...BankOfFlyersNavigation,
  ...ActivitiesNavigation,
  ...DashboardNavigation2,
]
export default navigation
