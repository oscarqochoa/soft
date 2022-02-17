export default[
    {
        path: '/socialnetwork/amg-prueba',
        name: 'amg-prueba-route',
        component: () => import('@/views/social-network/views/amg-prueba/AmgPrueba.vue'),
        meta: {
            permittedRoles : [1, 2]
        }
    }
]