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
          permittedRoles: [
            {
              role_id: 2,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 9,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 3,
              hasLevelValidation: true,
            },
            {
              role_id: 10,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 11,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 1,
              level_id: null,
              hasLevelValidation: false,
            }
          ],
          hasLevelValidation: true,
        },
      },
      {
        path: 'business',
        component: AnswersGuideGeneral,
        name: 'answers-guide-business',
        meta: {
          program: 1,
          permittedRoles: [
            {
              role_id: 2,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 9,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 3,
              hasLevelValidation: true,
            },
            {
              role_id: 10,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 11,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 1,
              level_id: null,
              hasLevelValidation: false,
            }
          ],
          hasLevelValidation: true,
        },
      },
      {
        path: 'credit-experts',
        component: AnswersGuideGeneral,
        name: 'answers-guide-credit-experts',
        meta: {
          program: 3,
          permittedRoles: [
            {
              role_id: 2,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 9,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 3,
              hasLevelValidation: true,
            },
            {
              role_id: 10,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 11,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 1,
              level_id: null,
              hasLevelValidation: false,
            }
          ],
          hasLevelValidation: true,
        },
      },
      {
        path: 'tax-research',
        component: AnswersGuideGeneral,
        name: 'answers-guide-tax-research',
        meta: {
          program: 5,
          permittedRoles: [
            {
              role_id: 2,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 9,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 3,
              hasLevelValidation: true,
            },
            {
              role_id: 10,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 11,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 1,
              level_id: null,
              hasLevelValidation: false,
            }
          ],
          hasLevelValidation: true,
        },
      },
      {
        path: 'debt-solution',
        component: AnswersGuideGeneral,
        name: 'answers-guide-debt-solution',
        meta: {
          program: 4,
          permittedRoles: [
            {
              role_id: 2,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 9,
              level_id: 1,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 9,
              level_id: 3,
              hasLevelValidation: true,
            },
            {
              role_id: 10,
              level_id: 2,
              hasLevelValidation: true,
            },
            {
              role_id: 11,
              level_id: null,
              hasLevelValidation: false,
            },
            {
              role_id: 1,
              level_id: null,
              hasLevelValidation: false,
            }
          ],
          hasLevelValidation: true,
        },
      },
    ],
    meta: {
      // permittedRoles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pageTitle: 'Answers Guide',
      breadcrumb: [{
        text: 'Answers Guide',
      }],
      permittedRoles: [
        {
          role_id: 2,
          level_id: null,
          hasLevelValidation: false,
        },
        {
          role_id: 9,
          level_id: 1,
          hasLevelValidation: true,
        },
        {
          role_id: 9,
          level_id: 2,
          hasLevelValidation: true,
        },
        {
          role_id: 9,
          level_id: 3,
          hasLevelValidation: true,
        },
        {
          role_id: 10,
          level_id: 2,
          hasLevelValidation: true,
        },
        {
          role_id: 11,
          level_id: null,
          hasLevelValidation: false,
        },
        {
          role_id: 1,
          level_id: null,
          hasLevelValidation: false,
        }
      ],
      hasLevelValidation: true,
    },
  },
]
