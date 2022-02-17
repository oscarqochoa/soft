import AnswersGuideBoostCredit from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-boost-credit/AnswersGuideBoostCredit'
import AnswersGuideBusiness from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-business/AnswersGuideBusiness'
import AnswersGuideCreditExperts from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-credit-experts/AnswersGuideCreditExperts'
import AnswersGuideTaxResearch from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-tax-research/AnswersGuideTaxResearch'
import AnswersGuideDebtSolution
  from '@/views/social-network/views/answers-guide/answers-guide-module/answers-guide-debt-solution/AnswersGuideDebtSolution'

export default [
  {
    path: '/socialnetwork/answers-guide',
    name: 'answers-guide',
    component: () => import('@/views/social-network/views/answers-guide/AnswersGuide.vue'),
    children: [
      {
        path: 'boost-credit',
        component: AnswersGuideBoostCredit,
        name: 'answers-guide-boost-credit',
      },
      {
        path: 'business',
        component: AnswersGuideBusiness,
        name: 'answers-guide-business',

      },
      {
        path: 'credit-experts',
        component: AnswersGuideCreditExperts,
        name: 'answers-guide-credit-experts',
      },
      {
        path: 'tax-research',
        component: AnswersGuideTaxResearch,
        name: 'answers-guide-tax-research',
      },
      {
        path: 'debt-solution',
        component: AnswersGuideDebtSolution,
        name: 'answers-guide-debt-solution',
      },
    ],
    meta: {
      //permittedRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pageTitle: 'Answers Guide',
      breadcrumb: [{
        text: 'Answers Guide',
      }],
    },
  },
]
