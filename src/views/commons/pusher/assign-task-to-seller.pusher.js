import store from '@/store';
import Vue from "vue";
import "@core/scss/vue/libs/vue-sweetalert.scss";
const assignTaskToSeller = () => {
    window.pusher.bind('assign-task-to-seller', async data => {
        const sessionId = store.state.auth.currentUser.user_id
        if (data.to_id == sessionId) {
            let timerInterval = 0;
            let sellersObject = data.sellers.reduce((a, v) => ({ ...a, [v.id]: v.label}), {})
            const result = await Vue.swal.fire({
                icon: 'warning',
                input: 'select',
                inputOptions: sellersObject,
                html: 'You have <strong></strong> left to accept the task or to pass it to the next catcher.',
                timer: 300000,
                text: ` ${data.to_id}`,
                showCancelButton: true,
                confirmButtonText: "Assign",
                customClass: {
                confirmButton: "btn btn-primary mr-1",
                cancelButton: "btn btn-danger  ",
                },
                didOpen: () => {
                  function secondsToHms(d) {
                    d = Number(d);
                    var h = Math.floor(d / 3600);
                    var m = Math.floor((d % 3600) / 60);
                    var s = Math.floor((d % 3600) % 60);
        
                    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
                    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                    return hDisplay + mDisplay + sDisplay;
                  }
                  timerInterval = setInterval(() => {
                    Vue.swal.getHtmlContainer().querySelector("strong").textContent = secondsToHms((
                      Vue.swal.getTimerLeft() / 1000
                    ).toFixed(0));
                  }, 100);
                },
                willClose: async () => {
                  clearInterval(timerInterval);
                },
            })
            if(result.isConfirmed) {
                data.assign_id = result.value 
                await window.amgApi.post('/round-robin/social-network/on-accept-task-seller-assign', data)
                await window.amgApi.post('/commons/close-all-swal', data)
            } else {
                data.catchers_denny.push(sessionId);
                await window.amgApi.post('/round-robin/social-network/on-deny-task-seller-assign', data)
                await window.amgApi.post('/commons/close-all-swal', data)
            }
        }
    })
}
export default assignTaskToSeller
