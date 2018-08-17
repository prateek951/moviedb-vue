<template>
    <li>
        <img :src="posterPath"/>
    </li>
</template>



<script>
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export default {
  name: "Movie",
  props: {
    movie: Object
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    posterPath: function() {
      return `${POSTER_PATH}/${this.movie.poster_path}`;
    }
  }
};
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>