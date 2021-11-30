export default [
    {
        path: '/dashboard',
        name: 'dashboard-crm',
        component: () => import('@/views/crm/views/dashboard/Dashboard.vue'),
        meta: {
            pageTitle: 'Dashboard',
            breadcrumb: [
                {
                    text: 'Dashboard',
                }
            ],
        },
    }
]