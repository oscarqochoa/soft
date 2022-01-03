<template>
  <feather-icon
    icon="SendIcon"
    :badge="messageCounter > 99 ? '+99' : messageCounter"
    badge-classes="bg-danger"
    size="19"
  />
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState({
      S_USER_CONTACTS: state => state.MessageStore.S_USER_CONTACTS,
    }),
    messageCounter(){
      return this.S_USER_CONTACTS.reduce((accum,item) => accum + Number(item.cm), 0)
    }
  }
};
</script>

<style>
</style>