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
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style scoped>
header {
  background: #111;
  padding:20px;
  color: white;
}
header h1 {
  border: 2px solid red;
}

</style>