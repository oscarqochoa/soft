export default [
    {
        path: '/payments',
        name: 'payments-crm',
        component: () => import('@/views/crm/views/payments/PaymentClient.vue'),
        children: [
            {
                path: '',
                name: 'payments-crm-list',
                component: () => import('@/views/crm/views/payments/components/Payments.vue'),
                meta:{
                    isClientsTab: true
                }
            },
            {
                path: 'process',
                name: 'payments-crm-process',
                component: () => import('@/views/crm/views/payments/components/Process.vue'),
                meta:{
                    isClientsTab: false
                }
            },
        ],
        
    }
]