import testRoute from '../views/test/test.router'

const routes = [
  { path: '/socialnetwork', redirect: { name: 'calendar-social-network' } },
  ...testRoute,
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
