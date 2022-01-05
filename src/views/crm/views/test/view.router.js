export default [
  {
    path: '/test',
    name: 'test-crm',
    component: () => import('@/views/crm/views/test/View.vue'),
    meta: {
      pageTitle: 'Test',
      breadcrumb: [
        {
          text: 'Test',
        },
      ],
      module: 2,
      permittedRoles: [1],
    },
  },
]
