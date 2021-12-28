export default [
    {
        path: '/crm/inventory',
        name: 'inventory-crm',
        component: () => import("@/views/commons/components/inventory/InventoryMain.vue"),
        meta:{
            isClientsTab: true,
            module: 2,
            
        },
        children: [
            {
                path: '',
                name: 'inventory-crm-equipment',
                component: () => import('@/views/commons/components/inventory/components/Equipment.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            {
                path: ' ',
                name: 'inventory-crm-equipment-request',
                component: () => import('@/views/commons/components/inventory/components/EquipmentRequest.vue'),
                meta:{
                    isClientsTab: false,
                    module: 2,
                }
            },
            {
                path: '  ',
                name: 'inventory-crm-assign',
                component: () => import('@/views/commons/components/inventory/components/Assign.vue'),
                meta:{
                    isClientsTab: false,
                    module: 2,
                }
            },
        ],
        
    }
]