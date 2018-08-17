<template>
  <div id="app">
      <Header :title="title"></Header>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Movies from "@/components/Movies.vue";
export default {
  data() {
    return {
      title: "MovieBase",
      isTrue: false,
      status: "Loading"
    };
  },
  components: {
    Header,
    Movies
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
}
</style>