<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  name: "Test",
  mounted(){
      this.getPokemons();
  },
  data() {
    return {
      message: "Hello World!",
    };
  },
  methods:{
      async getPokemons(){
        const data = await amgApi.get('/pokemon/ditto');
      }
  }
};
</script>

<style>
</style>