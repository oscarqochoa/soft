import store from '@/store';
import Vue from "vue";
import "@core/scss/vue/libs/vue-sweetalert.scss";
const assignTaskToSeller = () => {
    window.pusher.bind('assign-task-to-seller', async data => {
        const sessionId = store.state.auth.currentUser.user_id
        if (data.to_id == sessionId) {
            let sellersObject = data.sellers.reduce((a, v) => ({ ...a, [v.id]: v.label}), {})
            const result = await Vue.swal.fire({
                icon: 'warning',
                input: 'select',
                inputOptions: sellersObject,
                title: 'Task alert',
                text: `Please select a seller to assign the task or pass to the next catcher ${data.to_id}`,
                showCancelButton: true,
                confirmButtonText: "Assign",
                customClass: {
                confirmButton: "btn btn-primary mr-1",
                cancelButton: "btn btn-danger  ",
                },
            })
            if(result.isConfirmed) {
                data.assign_id = result.value 
                await window.amgApi.post('/round-robin/social-network/on-accept-task-seller-assign', data)
            } else {
                data.catchers_denny.push(sessionId);
                await window.amgApi.post('/round-robin/social-network/on-deny-task-seller-assign', data)
            }
        }
    })
}
export default assignTaskToSeller
