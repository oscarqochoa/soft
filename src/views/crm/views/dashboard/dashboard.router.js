export default [
  {
        path: '/dashboard',
        name: 'dashboard-crm',
        component: () => import('@/views/crm/views/dashboard/Dashboard.vue'),
        meta:{
            isClientsTab: true
        },
    }
]
    // {
    //     path: '/dashboard',
    //     name: 'dashboard-crm',
    //     component: () => import('@/views/crm/views/dashboard/Dashboard.vue'),
        
    // }

