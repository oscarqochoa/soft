<template>
  <div>
    <b-modal
      modal
      centered
      :title="`${objectLead.leadname}`"
      v-model="mutableIfModalCard"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      @hidden="closeModal"
      title-tag="h3"
    >
      <div>
        <ValidationObserver ref="form">
          <b-row>
            <b-col md="12">
              <b-row class="class-inline">
                <b-col
                  md="5"
                  class="class-campo-icon add-class-campo-icon"
                  style="border-radius: 10px 10px 0px 0px"
                >
                  <span
                    >COMMENT 
                    {{
                      objectLead.status == "pending"
                        ? ""
                        : objectLead.cmm_datetime | myGlobalDay
                    }}</span
                  >
                </b-col>
              </b-row>
            </b-col>
            <b-col md="12">
              <ValidationProvider
                name="comment"
                rules="required"
                v-slot="{ errors }"
              >
                <div class="form-group mt-0">
                  <b-form-textarea
                    class="textarea-style wysiwyg-notes w-100"
                    style="border-radius: 0px 10px 10px 10px; height:120px"
                    :class="{ 'border border-danger': errors[0] }"
                    v-model="comment"
                    :disabled="!statusPending"
                  ></b-form-textarea>
                </div>
              </ValidationProvider>
            </b-col>
          </b-row>
          <b-row v-if="statusPending">
            <b-col md="12" style="text-align: center" class="mt-3">
              <b-button
                variant="success"
                style="border-radius: 5px !important"
                @click="changeStatus()"
              >
                <feather-icon icon="FileTextIcon" /> SAVE
              </b-button>
            </b-col>
          </b-row>
          
        </ValidationObserver>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { amgApi } from '@/service/axios';
export default {
  props: ["objectLead", "ifModalCard"],
  data() {
    return {
      comment: null,
      mutableIfModalCard: this.ifModalCard,
      
    };
  },
  computed:{
      statusPending(){
        return this.objectLead.status == 'pending'? true:false
      },
      
      
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    changeStatus() {
        
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        const params = {
          id: this.objectLead.l_id,
          cmm: this.comment,
        };
        amgApi.post("/my-list-change", params).then((res) => {
          this.$emit("update", false);
          this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Saved Successfully')
        
        });
      });
    },
    fillComment(){
        if(this.objectLead.status == 'done' && this.objectLead.cmm !=null){
          this.comment = this.objectLead.cmm
        }
      }
  },
  created(){
    this.fillComment()
  }
};
</script>