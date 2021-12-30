
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters("ncr-store", ["ListSellers"]),
    },
    methods: {
        openModalQuestionnaire(score_id, lead_name, status_id, question_id) {
            this.status_id = status_id;
            this.question_id = question_id;
            this.score_id = score_id;
            this.lead_name = lead_name;
            this.modalQuestionnaire = true;
        },
        ...mapActions("ncr-store", ["LIST_SELLERS"]),
        getSellers() {
            if (this.ListSellers != null) {
              this.filter[0].options = this.ListSellers; 
            } else {
              amgApi
                .post("/sellerall/2", {
                  roles: "[3,5]",
                  type: "1",
                })
                .then((response) => {
                  if (response.status == 200) {
                    this.filter[0].options = response.data;
                    this.LIST_SELLERS(response.data)
                  }
                })
                .catch((error) => {
                  console.error(error);
                  this.showToast(
                    "danger",
                    "top-right",
                    "Error",
                    "XIcon",
                    "Something went wrong!"
                  );
                });
            }
          },
      },
      created: function () {
        this.getSellers();
      },

}