import TestNavigation from '../views/test/test.navigation'
import BankOfFlyersNavigation from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.navigation'
import ClientNavigation from '@/views/social-network/views/clients/client.navigation'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...TestNavigation,
  ...BankOfFlyersNavigation,
  ...ClientNavigation,

]
export default navigation
