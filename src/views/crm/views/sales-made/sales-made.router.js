import NewClientComponent from '@/views/crm/views/sales-made/components/NewClientComponent.vue'
import AddChangeComponent from '@/views/crm/views/sales-made/components/AddChangeComponent.vue'
import AnnuledComponent from '@/views/crm/views/sales-made/components/AnnuledComponent.vue'

export default {
  path: '/crm/sales-made/',
  name: 'sales-made-crm',
  component: () => import('./SalesMade.vue'),
  children: [
    // Note we provide the above parent route name on the default child tab
    // route to ensure this tab is rendered by default when using named routes
    {
      path: '',
      component: NewClientComponent,
      name: 'sales-made-crm-new-client',
    },
    {
      path: 'programs',
      component: AddChangeComponent,
      name: 'sales-made-crm-add-change',
      meta: {
        permittedRoles: [1, 2],
      },
    },
    {
      path: 'annul',
      component: AnnuledComponent,
      name: 'sales-made-crm-annulled',
      meta: {
        permittedRoles: [1, 2],
      },
    },

  ],
  meta: {
    pageTitle: 'Sales Made',
    breadcrumb: [{
      text: 'Sales Made',
    }],
  },
}
