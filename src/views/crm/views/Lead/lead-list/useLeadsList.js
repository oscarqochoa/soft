import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'
import crmService from '@/views/crm/services/crm.service'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useUsersList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    {
      key: 'date_even',
      label: '',
      sortable: true
    },
    {
      key: 'lead_name',
      label: 'Name',
      formatter: title,
      sortable: true
    },
    {
      key: 'state_hour',
      label: 'ST/AD',
      sortable: true
    },
    { key: 'status', sortable: true },
    { key: 'mobile', sortable: true },
    {
      key: 'credit_report',
      label: 'CR',
      sortable: true
    },
    {
      key: 'source_name',
      label: 'Source',
      sortable: true
    },
    { key: 'programs', sortable: true },
    { key: 'type_doc', sortable: true },
    {
      key: 'created_by',
      label: 'Created By',
      sortable: true
    },
    {
      key: 'assign_to',
      label: 'Assign To',
      sortable: true
    },
    { key: 'actions' },
  ]
  const tableLeadSn = [
    { key: 'nickname', sortable: true },
    { key: 'mobile', sortable: true },
    { key: 'status', sortable: true },
    {
      key: 'status_recovery',
      label: 'Type',
      sortable: true
    },
    { key: 'fanpage', sortable: true },
    {
      key: 'programs',
      label: 'Recomendations',
      sortable: true
    },
    { key: 'appointment', sortable: true },
    {
      key: 'created_date',
      label: 'Created Date',
      sortable: true
    },
    { key: 'owner', sortable: true }
  ]
  const tableLeadWPotential = [
    { key: 'nickname', sortable: true },
    { key: 'mobile', sortable: true },
    { key: 'status', sortable: true },
    {
      key: 'status_recovery',
      label: 'Type',
      sortable: true
    },
    { key: 'fanpage', sortable: true },
    {
      key: 'programs',
      label: 'Recomendations',
      sortable: true
    },
    { key: 'appointment', sortable: true },
    {
      key: 'created_date',
      label: 'Created Date',
      sortable: true
    },
    { key: 'owner', sortable: true }
  ]
  const refresh = ref(false)
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const fromFilter = ref(null)
  const toFilter = ref(null)
  const statusLeadFilter = ref(null)
  const ownerFilter = ref(null)
  const assignToFilter = ref(null)
  const crFilter = ref(null)
  const programFilter = ref(null)
  const sourceNameFilter = ref(null)
  const typeDocFilter = ref(null)
  const stAdFilter = ref(null)
  const roleFilter = ref(null)
  const planFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value,
    }
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }

  watch([refresh, currentPage, perPage, searchQuery, fromFilter, toFilter, statusLeadFilter, ownerFilter, assignToFilter, crFilter, programFilter, sourceNameFilter, typeDocFilter, stAdFilter, roleFilter, planFilter], () => {
    refetchData()
  })

  const fetchLeads = async (ctx, callback) => {
    try {
      const response = await crmService.getLeads({
        assign_to: assignToFilter.value,
        cr: crFilter.value,
        date_from: fromFilter.value,
        date_to: toFilter.value,
        idrole: 1,
        iduser: 1,
        lead_status: statusLeadFilter.value,
        name_text: searchQuery.value,
        order: 'desc',
        orderby: 10,
        program: programFilter.value,
        sourcename: sourceNameFilter.value,
        state_h: stAdFilter.value,
        typedoc: typeDocFilter.value,
        user_owner: ownerFilter.value,
        perpage: perPage.value,
        page: currentPage.value
      })
      totalUsers.value = response.total
      refresh.value = false
      return response.data
    } catch (error) {
      console.log('Something went wrong fetchLeads:', error)
      toast({
        component: ToastificationContent,
        props: {
          title: 'Error fetching leads list',
          icon: 'AlertTriangleIcon',
          variant: 'danger',
        },
      })
    }
  }
  const fetchLeadsSn = async (ctx, callback) => {
    try {
      const response = await crmService.getLeadsSn({
        cr: null,
        date_from: fromFilter.value,
        date_to: toFilter.value,
        lead_status: null,
        name_text: searchQuery.value,
        order: 'desc',
        orderby: 10,
        program: null,
        state_h: stAdFilter.value,
        type: 3,
        user_owner: ownerFilter.value,
        perpage: perPage.value,
        page: currentPage.value
      })
      totalUsers.value = response.total
      refresh.value = false
      return response.data
    } catch (error) {
      console.log('Something went wrong fetchLeadsSn:', error)
      toast({
        component: ToastificationContent,
        props: {
          title: 'Error fetching leads Sn list',
          icon: 'AlertTriangleIcon',
          variant: 'danger',
        },
      })
    }
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 'subscriber') return 'UserIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'UserIcon'
  }

  const resolveUserStatusVariant = status => {
    if (status === 'Pending') return 'warning'
    if (status === 'Active') return 'success'
    if (status === 'Inactive') return 'secondary'
    if (status === 'Not Contacted') return 'danger'
    return 'primary'
  }

  return {
    fetchLeads,
    fetchLeadsSn,
    tableColumns,
    tableLeadSn,
    refresh,
    perPage,
    currentPage,
    totalUsers,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refUserListTable,

    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
    refetchData,

    // Extra Filters
    fromFilter,
    toFilter,
    statusLeadFilter,
    ownerFilter,
    assignToFilter,
    crFilter,
    programFilter,
    sourceNameFilter,
    typeDocFilter,
    stAdFilter,
    roleFilter,
    planFilter,
  }
}
