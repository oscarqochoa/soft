import { title } from '@core/utils/filter'

export default [
    {
        key: 'nickname',
        label: 'Nickname',
        formatter: title,
        sortable: true,
    },
    {
        key: 'state_hour',
        label: 'ST/AD',
        sortable: true,
    },
    {
        key: 'source',
        label: 'Source',
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
        key: 'task',
        label: 'Task',
        sortable: false,
    },
    {
        key: 'created_at',
        label: 'Created at',
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