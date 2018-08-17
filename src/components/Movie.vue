<template>
    <li>
        <router-link :to="moviePath">
            <img :src="posterPath" alt="">
        </router-link>
    </li>
</template>



<script>
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const MOVIE_PATH = "/movie";
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
    },
    moviePath: function() {
      return `${MOVIE_PATH}/${this.movie.id}`;
    }
  }
};
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>