export default [
    {
          path: '/crm/glossary',
          name: 'glossary-crm',
          component: () => import('@/views/crm/views/glossary/Glossary.vue'),
          meta:{
            isClientsTab: true,
            module:2,
        },
      }
  ]