export default [
  {
    path: '/socialnetwork/calendar',
    name: 'test-social-network',
    component: () => import('@/views/social-network/views/test/Test.vue'),
    meta: {
      permittedRoles: [1, 2],
    },
  },
]
