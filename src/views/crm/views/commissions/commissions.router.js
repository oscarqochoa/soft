export default [{
    path: '/crm/commissions-crm',
    name: 'commissions-crm',
    component: () => import('@/views/crm/views/commissions/CommissionsCrm.vue'),
    meta: {
        pageTitle: 'Commissions',
        breadcrumb: [{
            text: 'Commissions',
        }],
    }
}, ]