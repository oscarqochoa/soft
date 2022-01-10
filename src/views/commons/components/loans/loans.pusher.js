// import store from "@/store/index";
// import router from '@/router/index'
export const insertLoan = () => {
    pusher.bind("reload-counter-loan", (data) => {
        alert('se inserto nuevo loan')
        // const callback = () => {
        //     window.focus();
        //     router.push('/messages')
        // };
        // if (
        //     (store.state.auth.currentUser.user_id == data.to_id) && (store.state.auth.currentUser.user_id != data.from_id) && data.type == 1) {
        //     NotificationMixin.methods.showWindowNotification(
        //         data.user_name,
        //         data.subject,
        //         undefined,
        //         undefined,
        //         callback 
        //     );
        //     store.dispatch('MessageStore/A_GET_USER_CONTACTS', { id: store.state.auth.currentUser.user_id })
        // } else if ((store.state.auth.currentUser.user_id != data.from_id) && data.type == 2) {
        //     data.users.map(user => {
        //         if (user.id == store.state.auth.currentUser.user_id) {
        //             NotificationMixin.maethods.showWindowNotification(
        //                 data.user_name,
        //                 data.subject,
        //                 undefined,
        //                 undefined,
        //                 callback
        //             );
        //             store.dispatch('MessageStore/A_GET_USER_CONTACTS', { id: store.state.auth.currentUser.user_id })
        //         }
        //     })
        // }
    });
} 