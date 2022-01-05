<template>
<div>
  <vertical-nav-menu-items
    :items="navMenuItems"
    :isMouseHovered="isMouseHovered"
    :isVerticalMenuCollapsed="isVerticalMenuCollapsed"
    class="navigation navigation-main"
    style="font-size: 14px"
  />
</div>
</template>

<script>
import { mapState } from "vuex";
import VerticalNavMenuItems from "./components/vertical-nav-menu-items/VerticalNavMenuItems.vue";
export default {
  props:{
    isMouseHovered: {
      type: Boolean,
      required: true,
    },
    isVerticalMenuCollapsed: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    VerticalNavMenuItems,
  },
  computed: {
    ...mapState({
      navMenuItems: (state) => state.SidebarStore.S_SIDEBAR_ITEMS,
    }),
  },
};
</script>

<style>
</style>