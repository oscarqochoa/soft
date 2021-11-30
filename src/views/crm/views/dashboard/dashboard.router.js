export default [
  {
    path: '/crm/',
    name: 'dashboard-crm',
    component: () => import('@/views/crm/views/dashboard/Dashboard.vue'),
    meta: {
      pageTitle: 'Dashboard',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
      ],
    },
  },
]
