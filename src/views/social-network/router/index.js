import answersGuideRouter from '@/views/social-network/views/answers-guide/answers-guide.router'
import testRoute from '../views/test/test.router'
import amgTestRoute from '../views/amg-test/amg-test.router'
import amgPruebaRoute from '../views/amg-prueba/amg-prueba.router'
import slotsRouter from '@/views/social-network/views/slots/slots.router'
import refsRouter from '@/views/social-network/views/refs/refs.router'

const routes = [
  { path: '/socialnetwork', redirect: { name: 'test-social-network' } },
  ...testRoute,
  ...amgTestRoute,
  ...amgPruebaRoute,
  ...slotsRouter,
  ...refsRouter,
  ...answersGuideRouter,
]

// eslint-disable-next-line array-callback-return
routes.map(route => {
  if (route.children) {
    // eslint-disable-next-line array-callback-return
    route.children.map(child => {
      if (child.meta) {
        // eslint-disable-next-line array-callback-return,no-param-reassign
        child.meta.module = 15
      } else {
        // eslint-disable-next-line array-callback-return,no-param-reassign
        child.meta = { module: 15 }
      }
    })
  }
  if (route.meta) {
    // eslint-disable-next-line array-callback-return,no-param-reassign
    route.meta.module = 15
  } else {
    // eslint-disable-next-line array-callback-return,no-param-reassign
    route.meta = { module: 15 }
  }
})

export default routes
