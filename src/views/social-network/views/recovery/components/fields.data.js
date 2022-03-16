import { title } from '@core/utils/filter'

export default [
    {
        key: 'nickname',
        label: 'Nickname',
        sortable: true,
        formatter: title,
    },
    {
        key: 'parent',
        label: 'Source / SubSource',
        sortable: false,
    },
    {
        key: 'mobile',
        label: 'Mobile',
        sortable: true,
    },
    {
        key: 'status',
        label: 'Status',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
    },
    {
        key: 'status_recovery',
        label: 'Type',
        sortable: false,
    },
    {
        key: 'fanpage',
        label: 'Fanpage',
        sortable: false,
    },
    {
        key: 'programs',
        label: 'Recomendations',
        sortable: false,
    },
    {
        key: 'attend',
        label: 'Task',
        sortable: false,
    },
    {
        key: 'file_evidence',
        label: 'Evidence',
        sortable: false,
    },
    {
        key: 'created_at',
        label: 'Created date',
        sortable: true,
    },
    {
        key: 'owner',
        label: 'Owner',
        sortable: true,
    },
    {
        key: 'tracking',
        label: 'Tracking',
        sortable: false,
    },
    {
        key: 'actions',
        label: 'Actions',
        sortable: false,
    },

]