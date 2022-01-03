export default [
    {
        path: '/messages',
        name: 'amg-messages',
        component: () => import('./MessagesMain.vue'),
        meta: {
            contentClass: 'chat-application email-application messages-application',
            contentRenderer: 'sidebar-left',
        },
    },
]
