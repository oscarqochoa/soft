import { refreshMessageQuantites } from '@/commons/messages/messages.pusher'
let pusher = new Pusher('fb2e6fc854a858bb1dda', {
    cluster: 'us2', authEndpoint: `${process.env.VUE_APP_BASE_URL}/pusher`, auth: {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
})
window.pusher = pusher;
pusher.subscribe("private-mail");
refreshMessageQuantites();