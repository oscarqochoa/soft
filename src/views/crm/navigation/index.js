import leadNav from "../views/Lead/lead.nav"

export default [
    {
        header: 'CRM',
    },
    {
        title: 'Clients',
        icon: 'UsersIcon',
        route: 'crm-clients-list',
    },
    ...leadNav,
    // {
    //     title: 'Test',
    //     icon: 'PieChartIcon',
    //     route: 'test-crm',
    // },
]
