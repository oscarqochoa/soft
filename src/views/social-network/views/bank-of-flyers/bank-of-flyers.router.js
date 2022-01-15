import bankOfFlyersListActive
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-active/bank-of-flyers-list-active.vue'
import bankOfFlyersListInactive
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-inactive/bank-of-flyers-list-inactive.vue'
import bankOfFlyersListPreactive
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyer-preactive/bank-of-flyers-list-preactive.vue'

export default [
  {
    path: '/socialnetwork/bank-of-flyers/',
    name: 'bank-of-flyers',
    component: () => import('@/views/social-network/views/bank-of-flyers/BankOfFlyers.vue'),
    children: [
      {
        path: '',
        component: bankOfFlyersListActive,
        name: 'list-social-network-active',

      },
      {
        path: 'inactive',
        component: bankOfFlyersListInactive,
        name: 'list-social-network-inactive',

      },
      {
        path: 'preactive',
        component: bankOfFlyersListPreactive,
        name: 'list-social-network-preactive',

      },

    ],
    meta: {
      pageTitle: 'Sales Made',
      breadcrumb: [{
        text: 'Sales Made',
      }],
    },
  },
]
