export default [
    {
          path: '/crm/ncr',
          name: 'ncr-crm',
          component: () => import("@/views/commons/components/ncr/NcrMain.vue"),
          meta:{
              isClientsTab: true,
              module: 2,
          },
          children: [
            {
                path: 'pending',
                name: 'ncr-pending',
                component: () => import('@/views/commons/components/ncr/components/ContentPending.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            {
                path: 'returned',
                name: 'ncr-returned',
                component: () => import('@/views/commons/components/ncr/components/ContentReturned.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            {
                path: 'completed',
                name: 'ncr-completed',
                component: () => import('@/views/commons/components/ncr/components/ContentCompleted.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            
        ],
      }
  ]