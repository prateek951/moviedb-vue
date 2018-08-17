<template>
    <ul>
        <Movie v-for="movie in movies" :movie="movie" :key="movie.id"></Movie>
    </ul>
</template>

<script>
import Movie from "@/components/Movie.vue";
export default {
  name: "Movies",
  data() {
    return {
      movies: []
    };
  },
  components: {
    Movie
  },
  async created() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f6f9d4166b7005ac1bb560f106484723"
      );
      const movies = await response.json();
      //   console.log(movies.results);
      this.movies = movies.results;
    } catch (err) {
      console.log(
        "Some error occured while trying to fetch the movies from the movies api",
        err
      );
    }
  },
  computed: {},
  methods: {
      handleMovieDetails: function() {
          
      }
  }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    display: grid;
    padding: 1rem;
    margin: 0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(6,1fr);
}
</style>