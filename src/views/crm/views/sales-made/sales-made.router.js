import NewClientComponent from '@/views/crm/views/sales-made/components/new-client/NewClientComponent.vue'
import AddChangeComponent from '@/views/crm/views/sales-made/components/AddChangeComponent.vue'
import AnnuledComponent from '@/views/crm/views/sales-made/components/AnnuledComponent.vue'

export default {
  path: '/crm/sales-made',
  name: 'sales-made-crm',
  component: () => import('./SalesMade.vue'),
  children: [
    // Note we provide the above parent route name on the default child tab
    // route to ensure this tab is rendered by default when using named routes
    { path: '', component: NewClientComponent, name: 'some-route' },
    { path: 'programs', component: AddChangeComponent },
    { path: 'annul', component: AnnuledComponent },
  ],
  meta: {
    pageTitle: 'Sales Made',
    breadcrumb: [
      {
        text: 'Sales Made',
      },
    ],
  },
}
