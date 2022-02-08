import { title } from '@core/utils/filter'

export default [
    {
        key: 'selected',
    },
    {
        key: 'lead_name',
        label: 'Name',
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
    },
    {
        key: 'program_name',
        label: 'Program',
        sortable: false,
    },
    {
        key: 'recomendations',
        label: 'Recomendations',
        sortable: false,
    },
    {
        key: 'task',
        label: 'Task',
        sortable: false,
    },
    {
        key: 'cr',
        label: 'CR',
        sortable: false,
    },
    {
        key: 'sale',
        label: 'Sale',
        sortable: false,
    },
    {
        key: 'created_at',
        label: 'Created at',
        sortable: true,
    },
    {
        key: 'catcher',
        label: 'Owner',
        sortable: true,
    },
    {
        key: 'actions',
        label: 'Actions',
        sortable: false,
    },

]