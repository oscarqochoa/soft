export default [
    {
        path: '/inventory',
        name: 'inventory-crm',
        component: () => import("@/commons/components/inventory/InventoryMain.vue"),
        children: [
            {
                path: '',
                name: 'inventory-crm-equipment',
                component: () => import('@/commons/components/inventory/components/Equipment.vue'),
                meta:{
                    isClientsTab: true,
                    module: 2,
                },
                
            },
            {
                path: ' ',
                name: 'inventory-crm-equipment-request',
                component: () => import('@/commons/components/inventory/components/EquipmentRequest.vue'),
                meta:{
                    isClientsTab: false,
                    module: 2,
                }
            },
            {
                path: '  ',
                name: 'inventory-crm-assign',
                component: () => import('@/commons/components/inventory/components/Assign.vue'),
                meta:{
                    isClientsTab: false,
                    module: 2,
                }
            },
        ],
        
    }
]