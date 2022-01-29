import SchedulesComponent from '@/views/commons/components/schedules/SchedulesComponent.vue'
import SchedulesReport from '@/views/commons/components/schedules/SchedulesReport.vue'
import SchedulesOvertime from '@/views/commons/components/schedules/SchedulesOvertime.vue'
import SchedulesJustifications from '@/views/commons/components/schedules/SchedulesJustifications.vue'

export default [
  {
    path: '/crm/schedules',
    name: 'schedules-crm',
    redirect: '/crm/schedules/report',
    component: SchedulesComponent,
    children: [
      {
        path: 'report',
        name: 'report-crm',
        component: SchedulesReport,
        meta: {
          module: 2,
          route: 'crm',
          permittedRoles: [1, 2],
        },
      },
      {
        path: 'overtime',
        name: 'overtime-crm',
        component: SchedulesOvertime,
        meta: {
          module: 2,
          route: 'crm',
          permittedRoles: [1, 2],
        },
      },
      {
        path: 'justifications',
        name: 'justifications-crm',
        component: SchedulesJustifications,
        meta: {
          module: 2,
          route: 'crm',
          permittedRoles: [1, 2],
        },
      },
    ],
    meta: {
      module: 2,
      route: 'crm',
      permittedRoles: [1, 2],
    },
  },
]
