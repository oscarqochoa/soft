import testRoute from '../views/test/test.router'
import bankOfFlyersRouter from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.router'
import ClientsRouter from '@/views/social-network/views/clients/client.router'

const routes = [
  { path: '/socialnetwork', redirect: { name: 'test-social-network' } },
  ...testRoute,
  ...bankOfFlyersRouter,
  ...ClientsRouter,

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
