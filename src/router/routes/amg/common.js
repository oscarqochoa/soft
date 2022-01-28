export default [
  {
    path: '/home',
    name: 'amg-menu',
    component: () => import('@/views/main/Menu.vue'),
    meta: {
      layout: 'horizontal',
    },
  },
]
