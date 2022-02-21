import testRoute from '../views/test/test.router'
import bankOfFlyersRouter from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.router'
import ClientsRouter from '@/views/social-network/views/clients/client.router'
import MigrationsRouter from '@/views/social-network/views/migrations/migrations.router'
import ActivitiesRouter from '@/views/social-network/views/activities/activities.router'
import DashboardRouter from '@/views/social-network/views/dashboard/dashboard.router'
import DashboardRouter2 from '@/views/social-network/views/dashboard2/dashboard.router'

const routes = [
  { path: '/socialnetwork', redirect: { name: 'dashboard-social-network' } },
  ...testRoute,
  ...bankOfFlyersRouter,
  ...ClientsRouter,
  ...MigrationsRouter,
  ...ActivitiesRouter,
  ...DashboardRouter,
  ...DashboardRouter2,

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
