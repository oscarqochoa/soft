import TestNavigation from '../views/test/test.navigation'
import AmgTestNavigation from '../views/amg-test/amg-test.navigation'
import AmgPruebaNavigation from '../views/amg-prueba/amg-prueba.navigation'
import SlotsNavigation from '@/views/social-network/views/slots/slots.navigation'
import RefsNavigation from '@/views/social-network/views/refs/refs.navigation'
import AnswersGuideNavigation from '@/views/social-network/views/answers-guide/answers-guide.navigation'

const navigation = [
  {
    header: 'SOCIAL NETWORK',
  },
  ...TestNavigation,
  ...AmgTestNavigation,
  ...AmgPruebaNavigation,
  ...SlotsNavigation,
  ...RefsNavigation,
  ...AnswersGuideNavigation,
]
export default navigation
