import Vue from "vue";
import store from "@/store";

const salesMadeAlert = () => {
  window.pusher.bind("sales-made-alert", async (data) => {
    const sessionId = store.state.auth.currentUser.user_id;
    if (data.to_id == sessionId) {
      Vue.swal
        .fire({
          html:
            '<img src="/images/icons/alert-info.png" style="margin-bottom: 10px;">' +
            '<div><h2 style="font-weight: 600;">APPROVE | SALE MADE</h2></div>' +
            '<div style="text-align: center;">' +
            '<div style="font-weight: bolder; text-transform: uppercase;">LEAD: ' +
            data.lead_name +
            " </div>" +
            "</div>",
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: "Ok",
        })
        .then((res) => {
          if (res) {
            //data.to_id = session_id;
            //axios.post("/api/closeswal", data).then((response) => {});
          }
        });
    }
  });
};
export default salesMadeAlert;
