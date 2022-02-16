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
          :class="i.cursor ? 'pointer' : ''"
          @click=" i.cursor ? clickCard(i,index) : ''"
        >
          <b-card-body class="pb-0">
            <div
              class="d-flex align-items-end justify-content-end "
            >
              <!--              <b-img-->
              <!--                class="img"-->
              <!--                :src="`${baseImg}/assets${i.icon}`"-->
              <!--              />-->

              <b-avatar
                :style="`${i.back}; color: ${i.color}`"
                size="40"
              >
                <feather-icon
                  size="21"
                  :icon="i.icon"
                />
              </b-avatar>

            </div>
            <div>
              <span class="mb-25 mt-1 title text-uppercase">
                {{ i.title }}

              </span>
              <div v-if="index !==3">
                <span class="data"> {{ i.data }} </span>
              </div>

            </div>
            <div
              v-if="index===3"
            >

              <div
                class="d-flex   justify-content-center align-content-center align-items-center pad "
                style="width: 45%; padding: 0; margin: 0; "
              >
                <span class="mobile">
                  ACTIVE
                </span>

                <span
                  style="padding-left: 9px"
                  class="mobile "
                >
                  RECOVERY
                </span>
              </div>

              <span
                style="padding-left: 9px"
                class="data"
              >{{ i.data }}</span>

              <span

                class=" data "
                style="padding-left: 55px"
              >{{ i.data_rec }}</span>

            </div>
          </b-card-body>
          <vue-apex-charts
            :key="i.key"
            type="area"
            height="100"
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

    color: {
      type: String,
      default: 'primary',
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    chartOptions: {
      type: Object,
      default: null,
    },

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

    }
  },
  computed: {

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

  font-size: 18px;
}

.title{
  font-weight:  600;
  font-size: medium;
}
@media (max-width: 1280px) {

  .pad{
    padding-left: 50px !important;
  }
}
.img {
  max-width: 60%;
  max-height: 60%;
}

</style>
