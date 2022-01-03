<template>
  <div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

export default {
  components: {},
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      /* S_TEMPLATES: event => event.CrmTemplateStore.S_TEMPLATES */
    })
  },
  created () {
    this.authUser = this.currentUser
  },
  data () {
    return {
      authUser: new Object,
      modul: 2,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      /* A_GET_TEMPLATES: 'CrmTemplateStore/A_GET_TEMPLATES' */
    })
  },
  mounted () {},
  props: {},
  setup() {},
}
</script>
