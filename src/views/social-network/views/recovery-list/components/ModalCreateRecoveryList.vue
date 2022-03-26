<template>
  <div>
    <div v-if="this.isCeo || this.isSupervisor || this.isTeamLeader" class="d-flex align-items-center justify-content-between pl-2 pr-2">
      <b-button class="botton-replay" variant="success" @click="openModalCreateList">Create Recovery List</b-button>
    </div>

    <b-modal
        size="xl"
        :title="`CREATE RECOVERY LIST `"
        v-model="openModal"
        body-class="p-0"
        @ok="createRecoverList"
        @hidden="closeModal"
    >
      <div class="p-2">
        <h4 class="mb-1">Select program</h4>
        <div class="d-flex align-items-center justify-content-between  w-100">
          <div :class="btnProgram ? item.id === btnProgram.id ? 'select-program' : '' : null" class=" p-1 card-programs-recovery cursor-pointer card" @click="selectProgramById(item.id)" v-for="item in programs">
            <p class="p-0  m-0">{{ item.value }}: <span class="">{{ item.count }}</span></p>
          </div>
        </div>
      </div>

      <div class="pr-2 pl-2">
        <h4 class="mb-1">Select program</h4>
        <div class="select-container-user-program">
          <v-select
              v-model="users"
              :options="usersTotal"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="true"
              :preserve-search="true"
              placeholder="Pick some"
              class=" rounded"
              label="name"
              :preselect-first="true"
          ></v-select>
          <div>
            <div class=" p-1 card-programs-recovery cursor-pointer card m-0" v-if="btnProgram">
              <p class="p-0  m-0">{{ btnProgram.value }}: <span class="">{{ btnProgram.count }}</span></p>
            </div>
          </div>
        </div>
      </div>


    </b-modal>
  </div>
</template>

<script>
import RecoveryListService from "@/views/social-network/views/recovery-list/service/recovery.list.service";
import vSelect from "vue-select";
import users from "@/router/routes/amg/users";

export default {
  name: 'ModalCreateRecoveryList',
  components: {
    vSelect
  },
  data(){
    return {
      openModal: false,
      programs: [],
      users: [],
      selectProgram: null,
      btnProgram: null,
      usersTotal: []
    }
  },
  props: {
    userCreateModal: {
      type: Array,
      default: []
    }
  },
  async mounted() {
    this.addPreloader();
    this.users = [];
    this.btnProgram = null;
    this.programs = await RecoveryListService.getRecoveryListByProgram();
    this.removePreloader()
  },
  methods: {
    openModalCreateList() {
      this.openModal = true;
    },
    selectProgramById(id) {
      this.selectProgram = id;
      this.btnProgram = this.programs.find(item => item.id === id);
    },
    async createRecoverList(bvModalEvt) {
      bvModalEvt.preventDefault()
      const resp = await this.showConfirmSwal(
          "Are you sure?",
          "You won't be able to revert this!",
          "question"
      )
      if (resp.value) {

        this.addPreloader();
        console.log('create')
        await RecoveryListService.createListRecoveryByProgram({
          usersId: this.users.map(user => user.id),
          programId: this.btnProgram ? this.btnProgram.id : null,
          cant: this.users.length
        })
        //userId,programId,cant
        setTimeout(() => {
          this.removePreloader();
          this.openModal = false;
        }, 3000)
      }

    },
    closeModal() {
      this.$emit('closeModalRecovery')
    }
  },
  watch: {
    userCreateModal() {
      this.usersTotal = this.userCreateModal.map(item => {
        return {
          name: item.fullName,
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="scss">
.card-programs-recovery{
  transition: .2s all ease-in-out;
  &:hover{
    background: #0090e7 !important;
    color: #fff;
  }
}
.select-program{
  background: #0090e7 !important;
  color: #fff;
}
.select-container-user-program{
  padding: 1rem 2rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
</style>