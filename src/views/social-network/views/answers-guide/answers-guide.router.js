import AnswersGuideGeneral from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-general/AnswersGuideGeneral'

export default [
  {
    path: '/socialnetwork/answers-guide',
    name: 'answers-guide',
    component: () => import('@/views/social-network/views/answers-guide/AnswersGuide.vue'),
    children: [
      {
        path: 'boost-credit',
        component: AnswersGuideGeneral,
        name: 'answers-guide-boost-credit',
        meta: {
          program: 2,
        },
      },
      {
        path: 'business',
        component: AnswersGuideGeneral,
        name: 'answers-guide-business',
        meta: {
          program: 1,
        },
      },
      {
        path: 'credit-experts',
        component: AnswersGuideGeneral,
        name: 'answers-guide-credit-experts',
        meta: {
          program: 3,
        },
      },
      {
        path: 'tax-research',
        component: AnswersGuideGeneral,
        name: 'answers-guide-tax-research',
        meta: {
          program: 5,
        },
      },
      {
        path: 'debt-solution',
        component: AnswersGuideGeneral,
        name: 'answers-guide-debt-solution',
        meta: {
          program: 4,
        },
      },
    ],
    meta: {
      // permittedRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pageTitle: 'Answers Guide',
      breadcrumb: [{
        text: 'Answers Guide',
      }],
    },
  },
]
