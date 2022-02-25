import Pusher from 'pusher-js'
import refreshMessageQuantites from '@/commons/messages/messages.pusher'
import reloadCounterLoanCrm from '@/views/crm/views/loans/reload-counter-loan-crm.pusher'
import acceptLeadFromSocialNetwork from '@/views/crm/views/Lead/pusher/social-accept-yes-or-not.pusher'
import sendJustifyFromSupervisor from '@/views/crm/views/schedules/pusher/send-justify-to-supervisor.pusher'
import sendFromRrhhJustifyToManagment from '@/views/crm/views/schedules/pusher/send-from-rrhh-justify-to-management.pusher'
import closedAllSwal from '@/views/commons/pusher/closed-all-swal.pusher'
import alertMarkSchedules from '@/views/crm/views/schedules/pusher/alert-mark-schedules.pusher'
import taskAlert from '@/views/commons/pusher/task-alert.pusher'
import { paragonNewCommentNotification } from '@/views/social-network/views/bank-of-flyers/bank-of-flyers.pusher'
import infoAdmToCrm from "@/views/crm/views/Lead/pusher/info-adm-to-crm.pusher";
import changeUserStatusSession from "@/views/commons/pusher/change-user-status-session.pusher";

const subscribePusher = () => {
  const pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
    authEndpoint: `${process.env.VUE_APP_BASE_URL}/pusher`,
    auth: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  })
  window.pusher = pusher
  try {
    pusher.subscribe('private-mail')
    closedAllSwal()
    refreshMessageQuantites()
    reloadCounterLoanCrm()
    acceptLeadFromSocialNetwork()
    sendJustifyFromSupervisor()
    sendFromRrhhJustifyToManagment()
    alertMarkSchedules()
    paragonNewCommentNotification()
    taskAlert()
    infoAdmToCrm()
    changeUserStatusSession()
  } catch (error) {
    console.error(error, 'error')
  }
}
subscribePusher()

export default subscribePusher
