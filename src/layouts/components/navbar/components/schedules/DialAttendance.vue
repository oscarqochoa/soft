<template>
  <div>
    <!-- <div class="text-center reloj">11:00:00</div> -->

    <PhotoCapture
      ref="photo"
      v-model="imageBase64"
    />
    {{ imageBase64 }} kghgjhgjh
    <div
      id="reloj"
      ref="reloj"
      class="reloj"
    >
      <span
        ref="hour"
        class="text-white"
      />: <span
        ref="min"
        class="text-white"
      />:
      <span
        ref="min"
        class="text-white"
      />
    </div>
    <!-- <button @click="capturePhoto()">sasa</button> -->
  </div>
</template>
<script>
import { PhotoCapture } from 'vue-media-recorder'
import ScheduleService from './service/schedule.service'

export default {
  components: {
    PhotoCapture,
  },
  data() {
    return {
      reloj: {
        hour: 0,
        min: 0,
        second: 0,
      },
      imageBase64: '',
    }
  },
  watch: {
    imageBase64(newVald, oldVal) {
      alert('sasas')
    },
  },
  mounted() {
    this.getCurrentTime()
    // console.log(this.$refs.reloj);
  },
  created() {},
  methods: {
    capturePhoto() {
      this.currentTime()
    },
    async getCurrentTime() {
      const data = await ScheduleService.currentTime()
      const hourRef = this.$refs.hour
      const minRef = this.$refs.min
      const secondRef = this.$refs.second

      let hour = data[0]
      let min = data[1]
      let second = data[2]
      window.setInterval(() => {
        if (second == 60) {
          second = 0
          min++
        }
        if (min == 60) {
          min = 0
          second = 0
          hour++
        }
        second++
        hourRef.innerHTML = (`0${hour}`).slice(-2)
        minRef.innerHTML = (`0${min}`).slice(-2)
        secondRef.innerHTML = (`0${second}`).slice(-2)
      }, 1000)
    },
    currentTime() {
      // axios.get("/api/hour_counter").then((res) => {
      //   let h = document.getElementById("horasm");
      //   let m = document.getElementById("minutosm");
      //   let s = document.getElementById("segundosm");
      //   let contado_h = res.data[0];
      //   let contado_m = res.data[1];
      //   let contado_s = res.data[2];
      //   window.setInterval(function () {
      //     if (contado_s == 60) {
      //       contado_s = 0;
      //       contado_m++;
      //     }
      //     if (contado_m == 60) {
      //       contado_m = 0;
      //       contado_s = 0;
      //       contado_h++;
      //     }
      //     h.innerHTML = ("0" + contado_h).slice(-2);
      //     m.innerHTML = ("0" + contado_m).slice(-2);
      //     s.innerHTML = ("0" + contado_s).slice(-2);
      //     contado_s++;
      //   }, 1000);
      // });
    },
  },
}
</script>
<style>
.camera,
canvas.preview {
  max-width: 100% !important;
  height: auto !important;
}
.photo-capture h1,
.photo-capture-actions {
  display: none;
}
.photo-capture .camera {
  transform: scaleX(-1);
  filter: FlipH;
}
.reloj {
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
}
</style>
<style scoped>
.reloj {
  width: 100%;
  text-align: center;
}
</style>
