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
          class="card"
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

              <div v-if="index !==3"  class="  mt-2 mb-1 ">
                <span class="data"> {{ i.data }} </span>
              </div>

            </div>
          </b-card-body>
            <div
              v-if="index===3"
              class=" d-inline-flex w-100 mt-1 mb-1 "
              :style="`border: 1px solid ${i.color}!important`"
            >

              <div
                class="cuadrado"
                style="width: 50%; padding-top: 7px; padding-bottom: 7px"
                :style=" `border-right: 1px solid ${i.color} !important;`"
                @click=" i.cursor ? clickCard(4,3) : ''"
              >
                <span
                  class="title-mobile"
                  style="margin-left: 20px"

                >
                  TODAY:
                </span>
                <span

                  class="data-mobile"
                  style="margin-left: 7px"
                >{{ i.data }}</span>
              </div>
              <div  style="width: 50%; padding-top: 7px; padding-bottom: 7px"  @click=" i.cursor ? clickCard(6,5) : ''">
                <span
                  style="margin-left: 20px"
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

  font-size: 16px;

}

.data-mobile {

  font-size: 16px;
}
.title{
  font-weight:  600;
  font-size: medium;
}

.title-mobile {
  font-size: 12px !important;

}
.cuadrado{
  border-right: 1px solid rgba(207, 190, 190, 0.5) !important;
}
@media (max-width: 1400px) {

  .title-mobile {
    font-size: 11px !important;

    margin-left: 15px !important;
  }

  .data {

    font-size: 14px;

  }

  .data-mobile {
    margin: 0.5px !important;
    font-size: 10.5px;

  }

  .icon {
    font-size: 60%;
  }

  .title {
    font-weight: 600;
    font-size: 13px;

  }

  .card {
    margin: 5px;
  }
}

</style>
