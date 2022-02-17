export default [
    {
      path: '/socialnetwork/amg-test',
      name: 'amg-test-route',
      component: () => import('@/views/social-network/views/amg-test/AmgTest.vue'),
      meta: {
        permittedRoles: [1, 2],
      },
    },
  ]
  