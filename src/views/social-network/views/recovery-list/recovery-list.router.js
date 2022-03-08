
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
    {
      path: "/socialnetwork/recovery-list/:userId/:fullname",
      name: "recovery-list-user",
      component: () =>
        import("@/views/social-network/views/recovery-list/RecoveryList.vue"),
      props: true,
      meta: {
        pageTitle: 'RecoveryList',
        breadcrumb: [{
          text: 'RecoveryList',
        }],
        tab: "rl",
      },
    },
  ]
  