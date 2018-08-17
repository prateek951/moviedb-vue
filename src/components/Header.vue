<template>
    <header>
        <h1><router-link to="/movies">{{ newTitle }}</router-link></h1>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  computed: {
    newTitle: function() {
      return this.title + "App";
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
header {
  background: black;
  color: white;
}
header h1 {
  border: 2px solid red;
}
</style>