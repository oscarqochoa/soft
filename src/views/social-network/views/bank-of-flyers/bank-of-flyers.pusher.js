import { NotificationMixin } from '@/mixins/notification'
import store from '@/store/index'

// eslint-disable-next-line import/prefer-default-export
export const paragonNewCommentNotification = () => {
  // eslint-disable-next-line no-undef
  pusher.bind('paragon-new-comment-notification', data => {
    const callback = () => {
      window.focus()
    }

    // eslint-disable-next-line array-callback-return
    console.log(data)
    data.to_id.map(user => {
      if (user.user_id === store.state.auth.currentUser.user_id) {
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
