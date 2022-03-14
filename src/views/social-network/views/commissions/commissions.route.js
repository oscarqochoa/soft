
export default [
  {
    path: '/socialnetwork/commissions',
    name: 'sn-commissions',
    component: () => import('@/views/social-network/views/commissions/Commissions.vue'),
    meta: {
      pageTitle: 'Commissions',
      breadcrumb: [{
        text: 'commissions',
      }],
      tab: "sn",
    },
  },
]
