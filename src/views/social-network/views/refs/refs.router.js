export default[
  {
    path: '/socialnetwork/amg-refs',
    name: 'amg-refs-route',
    component: () => import('@/views/social-network/views/refs/Refs.vue'),
    meta: {
      permittedRoles : [1, 2]
    }
  }
]
