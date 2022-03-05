
export default [
    {
      path: '/socialnetwork/recovery-list',
      name: 'recovery-list',
      component: () => import('@/views/social-network/views/recovery-list/RecoveryList.vue'),
      meta: {
        pageTitle: 'RecoveryList',
        breadcrumb: [{
          text: 'RecoveryList',
        }],
        tab: "rl",
      },
    },
  ]
  