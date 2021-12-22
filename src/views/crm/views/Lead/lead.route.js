import LeadList from './lead-module/list/LeadsList.vue'
import LeadSnList from './lead-module/list/LeadsSnList.vue'
import LeadWPotentialList from './lead-module/list/LeadsWPotentialList.vue'

export default [
  {
    path: '/leads',
    name: 'lead-crm',
    component: () => import('./Lead.vue'),
    redirect: { name: 'lead-crm-lead-list' },
    children: [
      {
        path: '',
        redirect: { name: 'lead-crm-lead-list' }
      },
      {
        path: '',
        component: LeadList,
        name: 'lead-crm-lead-list',
      },
      {
        path: 'sn',
        component: LeadSnList,
        name: 'lead-crm-lead-sn-list'
      },
      {
        path: 'w-potential',
        component: LeadWPotentialList,
        name: 'lead-crm-lead-w-potential-list'
      },
    ],
    meta: {
      pageTitle: 'Leads',
      breadcrumb: [{
        text: 'Leads',
      }, ],
    },
  },
  {
    path: '/leads/:id',
    name: 'lead-show',
    component: () => import('./lead-module/dashboard/default.vue')
  }
]