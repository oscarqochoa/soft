export default [
    {
        path: '/crm/clients',
        name: 'crm-clients',
        component: () => import('@/views/crm/views/clients/Clients.vue'),
        meta: {
            pageTitle: 'Clients',
            breadcrumb: [
                {
                    text: 'Clients',
                }
            ],
        },
    }
]