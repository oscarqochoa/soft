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
        children: [
            {
                path: '',
                name: 'crm-clients-list',
                component: () => import('@/views/crm/views/clients/components/ClientsGrid.vue'),
                meta:{
                    isClientsTab: true
                }
            },
            {
                path: 'shares',
                name: 'crm-clients-shared-list',
                component: () => import('@/views/crm/views/clients/components/ClientsGrid.vue'),
                meta:{
                    isClientsTab: false
                }
            },
        ],
    },
]
