<template>
  <div>
    <commissions-component :module="$route.meta.module" :tab="$route.meta.tab"></commissions-component>
  </div>
</template>
<script>
import CommissionsComponent from "@/commons/components/commissions/CommissionsComponent";

export default {
  components: {
    CommissionsComponent
  }
};
</script>