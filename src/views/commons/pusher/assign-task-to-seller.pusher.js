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
                html:
                'I will close in <strong></strong> seconds.',
                timer: 200000,
                title: 'Task alert',
                text: `Please select a seller to assign the task or pass to the next catcher ${data.to_id}`,
                showCancelButton: true,
                confirmButtonText: "Assign",
                customClass: {
                confirmButton: "btn btn-primary mr-1",
                cancelButton: "btn btn-danger  ",
                didOpen: () => {
                    const content = Vue.swal.getHtmlContainer()
                    const $ = content.querySelector.bind(content)
                
                    const stop = $('#stop')
                    const resume = $('#resume')
                    const toggle = $('#toggle')
                    const increase = $('#increase')
                
                    Vue.swal.showLoading()
                
                    function toggleButtons () {
                      stop.disabled = !Vue.swal.isTimerRunning()
                      resume.disabled = Vue.swal.isTimerRunning()
                    }
                
                    stop.addEventListener('click', () => {
                      Vue.swal.stopTimer()
                      toggleButtons()
                    })
                
                    resume.addEventListener('click', () => {
                      Vue.swal.resumeTimer()
                      toggleButtons()
                    })
                
                    toggle.addEventListener('click', () => {
                      Vue.swal.toggleTimer()
                      toggleButtons()
                    })
                
                    increase.addEventListener('click', () => {
                      Vue.swal.increaseTimer(5000)
                    })
                
                    timerInterval = setInterval(() => {
                      Vue.swal.getHtmlContainer().querySelector('strong')
                        .textContent = (Vue.swal.getTimerLeft() / 1000)
                          .toFixed(0)
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                },
            })
            if(result.isConfirmed) {
                data.assign_id = result.value 
                await window.amgApi.post('/round-robin/social-network/on-accept-task-seller-assign', data)
            } else {
                data.catchers_denny.push(sessionId);
                console.log(data);
                await window.amgApi.post('/round-robin/social-network/on-deny-task-seller-assign', data)
            }
        }
    })
}
export default assignTaskToSeller
