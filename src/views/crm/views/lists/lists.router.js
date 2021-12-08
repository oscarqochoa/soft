export default [
    {
        path: '/lists',
        name: 'lists-crm',
        component: () => import('@/views/crm/views/lists/ListsCrm.vue'),
        children: [
            {
                path: '',
                name: 'lists-crm-mylist',
                component: () => import('@/views/crm/views/lists/components/MyList.vue'),
                meta:{
                    isClientsTab: true
                },
                
            },
            {
                path: ' ',
                name: 'lists-crm-list',
                component: () => import('@/views/crm/views/lists/components/List.vue'),
                meta:{
                    isClientsTab: false
                }
            },
        ],
        
    }
]