import TestNavigation from '../views/test/test.navigation'
import BankOfFlyersNavigation from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.navigation'
import ClientNavigation from '@/views/social-network/views/clients/client.navigation'
import MigrationsNavigation from '@/views/social-network/views/migrations/migrations.navigation'
import ActivitiesNavigation from '@/views/social-network/views/activities/activities.navigation'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...TestNavigation,
  ...BankOfFlyersNavigation,
  ...ClientNavigation,
  ...MigrationsNavigation,
  ...ActivitiesNavigation,

]
export default navigation
