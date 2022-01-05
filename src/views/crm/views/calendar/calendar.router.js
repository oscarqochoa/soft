import CalendarAppointment from '@/views/crm/views/calendar/components/appointment/default.vue'
import CalendarTask from '@/views/crm/views/calendar/components/task/default.vue'

export default [
  {
    path: '/calendar',
    name: 'calendar-crm',
    component: () => import('./default.vue'),
    redirect: { name: 'crm-calendar-appointment' },
    children: [
      {
        path: '',
        redirect: { name: 'crm-calendar-appointment' }
      },
      {
        path: 'appointment',
        component: CalendarAppointment,
        name: 'crm-calendar-appointment',
      },
      {
        path: 'task',
        component: CalendarTask,
        name: 'crm-calendar-task'
      },
    ],
    meta: {
      pageTitle: 'Calendar',
      breadcrumb: [{
        text: 'Calendar',
      }, ],
    },
  },
]