export default[
  {
    path: '/socialnetwork/amg-slots',
    name: 'amg-slots-route',
    component: () => import('@/views/social-network/views/slots/Slot.vue'),
    meta: {
      permittedRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
  },
]
