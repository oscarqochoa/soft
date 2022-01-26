import Pusher from 'pusher-js'
import { refreshMessageQuantites } from '@/commons/messages/messages.pusher'
import { reloadCounterLoanCrm } from '@/views/crm/views/loans/reload-counter-loan-crm.pusher'

const subscribePusher = () => {
  const pusher = new Pusher('fb2e6fc854a858bb1dda', {
    cluster: 'us2',
    authEndpoint: `${process.env.VUE_APP_BASE_URL}/pusher`,
    auth: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  })
  window.pusher = pusher
  try {
    const subscribe = pusher.subscribe('private-mail')
    console.log(subscribe, 'subscribe')
  } catch (error) {
    console.error(error, 'error')
  }
  refreshMessageQuantites()
  reloadCounterLoanCrm()
}
subscribePusher()

export default subscribePusher
