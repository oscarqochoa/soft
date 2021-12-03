export default [
  {
    path: '/dasboard',
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
    // {
    //     path: '/dashboard',
    //     name: 'dashboard-crm',
    //     component: () => import('@/views/crm/views/dashboard/Dashboard.vue'),
        
    // }

