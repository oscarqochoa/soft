
export default [
    {
      path: '/socialnetwork/recovery-list',
      name: 'recovery-list',
      component: () => import('@/views/social-network/views/recovery-list/RecoveryList.vue'),
      meta: {
        // permittedRoles :[10,11],
        pageTitle: 'RecoveryList',
        breadcrumb: [{
          text: 'RecoveryList',
        }],
        tab: "rl",
      },
    },
  ]
  