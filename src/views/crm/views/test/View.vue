<template>
  <div>
    <h1>{{ message }}</h1>
    <pre>{{ currentUser }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Test",
  mounted() {
    amgApi
      .get("/welcome")
      .then((response) => {
        console.log(response);
      });
  },
  data() {
    return {
      message: "Hello World 2!",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token"
    }),
  },
};
</script>

<style>
</style>