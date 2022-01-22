import { NotificationMixin } from '@/mixins/notification'
import store from '@/store/index'

export const paragonNewCommentNotification = () => {
  pusher.bind('paragon-new-comment-notification', data => {
    const callback = () => {
      window.focus()
    }

    data.to_id.map(user => {
      if (user.user_id == store.state.auth.currentUser.user_id) {
        NotificationMixin.methods.showWindowNotification(
          data.title,
          data.body,
          undefined,
          undefined,
          callback,
        )
      }
    })
  })
}
