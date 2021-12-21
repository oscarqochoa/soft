export default [
    {
        path: '/payments',
        name: 'payments-crm',
        component: () => import('@/views/crm/views/payments/PaymentClient.vue'),
        meta:{
            isClientsTab: true,
            module: 2,
        },
        children: [
            {
                path: '',
                name: 'payments-crm-list',
                component: () => import('@/views/crm/views/payments/components/Payments.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                }
            },
            {
                path: 'process',
                name: 'payments-crm-process',
                component: () => import('@/views/crm/views/payments/components/Process.vue'),
                meta:{
                    isClientsTab: false,
                    module: 2,
                }
            },
        ],
        
    }
]