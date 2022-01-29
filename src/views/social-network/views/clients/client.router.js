import ClientsList from '@/views/social-network/views/clients/clients-module/ClientsList.vue'

export default [
  {
    path: '/socialnetwork/clients',
    name: 'clients',
    component: () => import('@/views/social-network/views/clients/Clients.vue'),
    children: [

      {
        path: '',
        component: ClientsList,
        name: 'list-clients',

      },

    ],
    meta: {
      pageTitle: 'Clients',
      breadcrumb: [{
        text: 'clients',
      }],
    },
  },
]
