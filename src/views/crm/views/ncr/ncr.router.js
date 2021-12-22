export default [
    {
          path: '/crm/ncr',
          name: 'ncr-crm',
          component: () => import("@/commons/components/ncr/NcrMain.vue"),
          meta:{
              isClientsTab: true,
              module: 2,
          },
          children: [
            {
                path: 'pending',
                name: 'ncr-pending',
                component: () => import('@/commons/components/ncr/components/ContentPending.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            
        ],
      }
  ]