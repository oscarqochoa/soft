export default [
    {
          path: '/glossary',
          name: 'glossary-crm',
          component: () => import('@/views/crm/views/glossary/Glossary.vue'),
          meta:{
            isClientsTab: true
        },
      }
  ]