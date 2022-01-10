export default [
  {
    path: '/socialnetwork/test',
    name: 'test-social-network',
    component: () => import('@/views/social-network/views/test/Test.vue'),
    meta: {
      permittedRoles: [1, 2],
    },
  },
]
