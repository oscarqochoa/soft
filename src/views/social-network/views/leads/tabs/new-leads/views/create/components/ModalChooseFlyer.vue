<template>
  <div>
    <b-modal
      modal
      :title="title"
      v-model="mutableShow"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="close"
      title-tag="h3"
    >
      <b-container>
        <b-row class="mt-1">
          <b-col
            md="3"
            class="my-1"
            v-for="(item, index) in S_FLYERS"
            :key="index"
          >
            <div class="selectable">
              <b-badge variant="primary" class="badge">
                {{ item.state }}
              </b-badge>
              <b-img
                :src="item.route_thumb"
                class="img"
                @click="selectFlyer(item.id, item)"
              ></b-img>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      mutableShow: this.show,
    };
  },
  computed: {
    ...mapState({
      S_FLYERS: (state) => state.SocialNetworkLeadsStore.S_FLYERS,
    }),
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
    selectFlyer(id, flyer) {
      this.$emit("onSelect", id, flyer);
    },
  },
};
</script>

<style lang="scss">
.selectable {
  position: relative;
  cursor: pointer;
  width: 120px;
  height: 120px;
  background-color: #1d222e;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    --webkit-transform: scale(2);
  }

  .badge {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .img {
    width: 100%;
    height: 100%;
    contain: cover;
  }
}
</style>