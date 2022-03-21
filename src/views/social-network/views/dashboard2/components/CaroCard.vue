<template>
  <div>
    <div>
      <b-card-group
        deck
        class="mb-3"
      >
        <b-card
          v-for="(i,index) in data"
          :key="index"
          no-body

          :style="`border: 1px solid ${i.color}!important`"
          :class="i.cursor ? 'pointer' : '' "
          @click=" i.cursor ? clickCardGeneral(i,index) : ''"
        >
          <b-card-body class="pb-0  ">
            <div
              class="d-flex align-items-end  justify-content-between"
            >

              <span class="mb-25 mt-1 title text-uppercase ">
                {{ i.title }}

              </span>
              <b-avatar
                :style="`${i.back}; color: ${i.color}`"
                size="4em"
                class="icon"
              >
                <feather-icon
                  size="21"
                  :icon="i.icon"
                />
              </b-avatar>

            </div>
            <div>

              <div v-if="index !==3">
                <span class="data"> {{ i.data }} </span>
              </div>

            </div>
            <div
              v-if="index===3"
              class="pad d-inline-flex w-100 mt-1 mb-1 "
            >

              <div
                class="cuadrado"
                style="width: 50%"
                @click=" i.cursor ? clickCard(4,3) : ''"
              >
                <span
                  class="title-mobile"
                  style="margin-left: 9px"

                >
                  ACTIVE:
                </span>
                <span

                  class="data-mobile"
                  style="margin-left: 6px"
                >{{ i.data }}</span>
              </div>
              <div  style="width: 50%"  @click=" i.cursor ? clickCard(6,5) : ''">
                <span
                  style="margin-left: 6px"
                  class="title-mobile"

                >
                  RECOVERY:
                </span>
                <span

                  class="data-mobile"
                  style="margin-left: 6px"
                >{{ i.data_rec ? i.data_rec : 0 }}

                </span>

              </div>

            </div>
          </b-card-body>
          <vue-apex-charts
            :key="i.key"
            type="area"
            height="60"
            width="100%"
            :options="chartOptionsComputed(i.color)"
            :series="i.series"
          />

        </b-card>
      </b-card-group>
    </div>
    <info-card-modal
      v-if="modalInfo"
      :card="card"
      :color="color"
      :item="item"
      @close="closeInfoModal"
    />
  </div>
</template>

<script>
import { BCard, BCardBody, BAvatar } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

import { areaChartOptions } from '@/views/social-network/views/dashboard2/components/charOptions'
import InfoCardModal from '@/views/social-network/views/dashboard2/components/modals/InfoCardModal.vue'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardBody,
    BAvatar,
    InfoCardModal,
  },
  props: {
    id: null,


    chartData: {
      type: Array,
      default: () => [],
    },
    chartOptions: {
      type: Object,
      default: null,
    },

    // eslint-disable-next-line vue/require-default-prop
    data: null,

    type: null,
    date_init: null,
    date_end: null,
    program: null,
    user: null,



  },

  data() {
    return {
      modalInfo: false,
      item: {},
      baseImg: process.env.VUE_APP_BASE_URL_FRONT,
      card: null,
      color : null
    }
  },

  methods: {

    chartOptionsComputed(color) {
      if (this.chartOptions === null) {
        const options = JSON.parse(JSON.stringify(areaChartOptions))
        options.theme.monochrome.color = color

        return options
      }

      return this.chartOptions
    },
    closeInfoModal() {
      this.modalInfo = false
    },

    clickCardGeneral(item, index) {

      if (index !== 3 && index !== 5) {
        this.showModalLead = true
        this.card = index + 1
        this.item = {
          //   type: this.type,
          date_init: this.date_init,
          date_end: this.date_end,
          program: this.program,
          card: index + 1,
          user: this.user,
        }
        this.modalInfo = true
        this.color = item.styleModal
      }
    },
    clickCard(item, index) {
      this.showModalLead = true
      this.card = index + 1
      this.item = {
        //   type: this.type,
        date_init: this.date_init,
        date_end: this.date_end,
        program: this.program,
        card: index + 1,
        user: this.user,
      }
      this.modalInfo = true
      this.color = item.styleModal
    },
  },
}
</script>
<style scoped>
.data {

  font-size: 20px;
}

.data-mobile {

  font-size: 15px;
}
.title{
  font-weight:  600;
  font-size: medium;
}

.pad{
  border-radius: 5px;
  border: 1px solid rgba(207, 190, 190, 0.5)  !important;

}
.cuadrado{
  border-right: 1px solid rgba(207, 190, 190, 0.5) !important;
}
@media (max-width: 1400px) {

  .title-mobile{
    font-size: 10px !important;
    margin: 1px !important;


  }
  .data-mobile {
    margin: 1px !important;
    font-size: 12px;

  }
  .icon{
    font-size: 60%;
  }
  .title{
    font-weight:  600;
    font-size: 13px;
  }

}

</style>
